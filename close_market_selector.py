#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
A股尾盘选股分析程序
每个交易日14:30分自动运行，选出符合条件的个股并获取详细信息
"""

import requests
import json
from datetime import datetime, time
from typing import List, Dict, Optional
import os


class CloseMarketSelector:
    """尾盘选股分析器"""

    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }

        # 选股策略参数
        self.strategy_params = {
            'min_change': 2.0,      # 最小涨幅(%)
            'max_change': 7.0,      # 最大涨幅(%)
            'min_volume_ratio': 1.5, # 最小量比
            'min_turnover': 2.0,     # 最小换手率(%)
            'max_turnover': 15.0,    # 最大换手率(%)
            'min_price': 3.0,       # 最低价格
            'max_price': 100.0,      # 最高价格
            'min_market_cap': 10,    # 最小市值(亿元)
            'max_market_cap': 500,   # 最大市值(亿元)
            'select_count': 10       # 选出股票数量
        }

    def get_market_data(self) -> List[Dict]:
        """
        获取市场实时数据
        """
        url = "https://push2.eastmoney.com/api/qt/clist/get"

        try:
            params = {
                'pn': '1',
                'pz': '5000',
                'po': '1',
                'np': '1',
                'fltt': '2',
                'invt': '2',
                'fid0': 'f3',
                'fs': 'm:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23',
                'fields': 'f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152,f184,f204,f205'
            }

            response = requests.get(url, params=params, headers=self.headers, timeout=15)

            if response.status_code == 200:
                result = response.json()
                if result.get('rc') == 0 and 'data' in result:
                    diff = result['data']['diff']
                    stocks = self._parse_market_data(diff)
                    print(f"成功获取 {len(stocks)} 只股票数据")
                    return stocks
                else:
                    print(f"API返回错误: {result.get('rt', -1)}")
                    return []
            else:
                print(f"获取数据失败，状态码: {response.status_code}")
                return []

        except Exception as e:
            print(f"获取市场数据时出错: {e}")
            return []

    def _parse_market_data(self, diff_data: List) -> List[Dict]:
        """解析市场数据"""
        stocks = []

        for item in diff_data:
            try:
                stock = {
                    'code': item.get('f12', ''),
                    'name': item.get('f14', ''),
                    'price': float(item.get('f2', 0) or 0),           # 最新价
                    'change_pct': float(item.get('f3', 0) or 0),      # 涨跌幅(%)
                    'change_amount': float(item.get('f4', 0) or 0),   # 涨跌额
                    'high': float(item.get('f15', 0) or 0),          # 最高价
                    'low': float(item.get('f16', 0) or 0),           # 最低价
                    'open': float(item.get('f17', 0) or 0),          # 开盘价
                    'pre_close': float(item.get('f18', 0) or item.get('f9', 0) or 0),  # 昨收价
                    'volume': int(item.get('f5', 0) or 0),         # 成交量(手)
                    'amount': float(item.get('f6', 0) or 0),        # 成交额(元)
                    'volume_ratio': float(item.get('f10', 0) or 0),  # 量比
                    'turnover': float(item.get('f8', 0) or 0),       # 换手率(%)
                    'pe_ratio': float(item.get('f9', 0) or 0),      # 市盈率
                    'market_cap': float(item.get('f20', 0) or 0),    # 总市值
                    'circulating_cap': float(item.get('f21', 0) or 0), # 流通市值
                    'industry': str(item.get('f62', '') or ''),      # 行业
                    'speed': float(item.get('f33', 0) or 0),         # 涨速
                    'year_high': float(item.get('f115', 0) or 0),    # 年内最高价
                    'year_low': float(item.get('f116', 0) or 0),     # 年内最低价
                }

                # 过滤无效数据
                if not stock['code'] or not stock['name'] or stock['price'] == 0:
                    continue

                # 计算相对位置
                if stock['year_high'] and stock['year_low'] and stock['year_high'] != stock['year_low']:
                    stock['year_position'] = ((stock['price'] - stock['year_low']) /
                                           (stock['year_high'] - stock['year_low']) * 100)
                else:
                    stock['year_position'] = 50

                stocks.append(stock)

            except Exception as e:
                continue

        return stocks

    def filter_stocks(self, stocks: List[Dict]) -> List[Dict]:
        """
        根据选股策略筛选股票
        """
        params = self.strategy_params
        filtered = []

        for stock in stocks:
            change_pct = stock['change_pct']
            price = stock['price']
            volume_ratio = stock['volume_ratio']
            turnover = stock['turnover']
            market_cap = stock['market_cap'] / 100000000 if stock['market_cap'] else 0  # 转换为亿元

            # 过滤ST股票
            if 'ST' in stock['name'] or 'st' in stock['name']:
                continue

            # 涨幅筛选
            if not (params['min_change'] <= change_pct <= params['max_change']):
                continue

            # 价格筛选
            if not (params['min_price'] <= price <= params['max_price']):
                continue

            # 量比筛选
            if volume_ratio and volume_ratio < params['min_volume_ratio']:
                continue

            # 换手率筛选
            if turnover and not (params['min_turnover'] <= turnover <= params['max_turnover']):
                continue

            # 市值筛选
            if market_cap and not (params['min_market_cap'] <= market_cap <= params['max_market_cap']):
                continue

            # 计算综合得分
            score = self._calculate_score(stock)
            stock['score'] = score

            filtered.append(stock)

        # 按得分排序
        filtered.sort(key=lambda x: x['score'], reverse=True)

        # 返回前N只
        return filtered[:params['select_count']]

    def _calculate_score(self, stock: Dict) -> float:
        """
        计算股票综合得分
        得分越高代表越符合选股条件
        """
        score = 0

        # 涨速得分（尾盘强势更优）
        if stock.get('speed', 0):
            score += stock['speed'] * 10

        # 量比得分
        if stock.get('volume_ratio', 0):
            if stock['volume_ratio'] > 2:
                score += 30
            elif stock['volume_ratio'] > 1.5:
                score += 20

        # 换手率得分
        turnover = stock.get('turnover', 0)
        if 3 <= turnover <= 8:
            score += 25
        elif 8 < turnover <= 12:
            score += 15

        # 涨幅得分（适中涨幅更好）
        change_pct = stock['change_pct']
        if 3 <= change_pct <= 5:
            score += 20
        elif 5 < change_pct <= 7:
            score += 10

        # 相对位置得分（低位启动更优）
        year_pos = stock.get('year_position', 50)
        if year_pos < 30:
            score += 15
        elif year_pos < 50:
            score += 10

        return round(score, 2)

    def get_stock_detail(self, code: str) -> Dict:
        """
        获取个股详细信息
        """
        detail = {
            'market_cap': '',
            'pe_ratio': '',
            'pb_ratio': '',
            'roe': '',
            'net_profit': '',
            'revenue': '',
            'profit_growth': '',
            'revenue_growth': '',
            'industry': '',
            'concepts': '',
            'business': '',
            'news': []
        }

        try:
            # 获取基本面数据
            basic_url = f"https://push2.eastmoney.com/api/qt/stock/get"
            params = {
                'secid': self._get_secid(code),
                'fields': 'f57,f58,f107,f108,f109,f110,f161,f162,f163,f164,f165,f166,f167,f168,f169,f170,f171,f172,f173,f174,f175,f176,f177,f178,f179,f180,f181,f182,f183,f184,f185,f186,f187,f188,f189,f190,f191,f192,f193,f194,f195,f196,f197,f198,f199,f200,f201,f202,f203,f204,f205,f206,f207,f208,f209,f210,f211,f212,f213,f214,f215,f216,f217,f218,f219,f220,f221,f222,f223,f224,f225,f226,f227,f228,f229,f230,f231,f232,f233,f234,f235,f236,f237,f238,f239,f240,f241,f242,f243,f244,f245,f246,f247,f248,f249,f250,f251,f252,f253,f254,f255,f256,f257,f258,f259,f260,f261,f262,f263,f264,f265,f266,f267,f268,f269,f270,f271,f272,f273,f274,f275,f276,f277,f278,f279,f280,f281,f282,f283,f284,f285,f286,f287,f288,f289,f290,f291,f292,f293,f294,f295,f296,f297,f298,f299,f300'
            }

            response = requests.get(basic_url, params=params, headers=self.headers, timeout=10)
            if response.status_code == 200:
                result = response.json()
                if result.get('rc') == 0 and 'data' in result:
                    data = result['data']

                    # 市值相关
                    market_cap = data.get('f116', 0) / 100000000  # 转换为亿元
                    detail['market_cap'] = f"{market_cap:.2f}亿"

                    # 估值指标
                    pe = data.get('f9', 0)
                    pb = data.get('f23', 0)
                    detail['pe_ratio'] = f"{pe:.2f}" if pe else '-'
                    detail['pb_ratio'] = f"{pb:.2f}" if pb else '-'

                    # 财务数据
                    net_profit = data.get('f43', 0) / 100000000  # 净利润(亿元)
                    revenue = data.get('f44', 0) / 100000000  # 营业收入(亿元)
                    detail['net_profit'] = f"{net_profit:.2f}亿" if net_profit else '-'
                    detail['revenue'] = f"{revenue:.2f}亿" if revenue else '-'

                    # 增长率
                    profit_growth = data.get('f45', 0)
                    revenue_growth = data.get('f46', 0)
                    detail['profit_growth'] = f"{profit_growth:.2f}%" if profit_growth else '-'
                    detail['revenue_growth'] = f"{revenue_growth:.2f}%" if revenue_growth else '-'

                    # ROE
                    roe = data.get('f162', 0)
                    detail['roe'] = f"{roe:.2f}%" if roe else '-'

            # 获取行业和概念
            detail.update(self._get_stock_industry_concepts(code))

            # 获取公司简介
            detail['business'] = self._get_company_intro(code)

            # 获取相关新闻
            detail['news'] = self._get_stock_news(code, limit=3)

        except Exception as e:
            print(f"获取股票 {code} 详情时出错: {e}")

        return detail

    def _get_secid(self, code: str) -> str:
        """转换股票代码为东方财富secid格式"""
        if code.startswith('6'):
            return f'1.{code}'  # 沪市
        elif code.startswith('0') or code.startswith('3'):
            return f'0.{code}'  # 深市
        elif code.startswith('8') or code.startswith('4'):
            return f'0.{code}'  # 北交所
        return f'1.{code}'

    def _get_stock_industry_concepts(self, code: str) -> Dict:
        """获取股票的行业和概念信息"""
        result = {'industry': '', 'concepts': ''}

        try:
            url = "https://push2.eastmoney.com/api/qt/stock/get"
            secid = self._get_secid(code)

            params = {
                'secid': secid,
                'fields': 'f57,f58,f107,f108,f109,f110,f161,f162,f163,f164,f165'
            }

            response = requests.get(url, params=params, headers=self.headers, timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get('rc') == 0 and 'data' in data:
                    stock_data = data['data']

                    # 行业信息
                    result['industry'] = stock_data.get('f74', '') or stock_data.get('f73', '')

                    # 概念信息
                    concepts = stock_data.get('f84', '')
                    if concepts:
                        # 概念通常用逗号分隔
                        result['concepts'] = concepts

        except Exception as e:
            pass

        return result

    def _get_company_intro(self, code: str) -> str:
        """获取公司简介"""
        try:
            url = f"https://emweb.securities.eastmoney.com/PC_HSF10/CompanySurvey/CompanySurveyAjaxNew"

            params = {
                'code': code,
            }

            response = requests.get(url, params=params, headers=self.headers, timeout=10)
            if response.status_code == 200:
                result = response.json()
                if result.get('data'):
                    company_data = result['data']
                    intro = company_data.get('gsjj', '')
                    if intro:
                        return intro[:200] + '...' if len(intro) > 200 else intro

        except Exception as e:
            pass

        return ''

    def _get_stock_news(self, code: str, limit: int = 3) -> List[str]:
        """获取股票相关新闻"""
        news_list = []

        try:
            url = "https://np-anotice-stock.eastmoney.com/api/security/ann"
            secid = self._get_secid(code)

            params = {
                'sr': '1',
                'page_size': str(limit),
                'page_index': '1',
                'ann_type': 'A',
                'client_source': 'web',
                'f_node': '0',
                's_node': '0',
            }

            response = requests.get(url, params=params, headers=self.headers, timeout=10)
            if response.status_code == 200:
                result = response.json()
                if result.get('code') == 0 and 'data' in result:
                    data_list = result['data'].get('list', [])
                    for item in data_list[:limit]:
                        title = item.get('title', '')
                        if title:
                            news_list.append(title)

        except Exception as e:
            pass

        return news_list

    def generate_selection_report(self, selected_stocks: List[Dict]) -> str:
        """
        生成选股报告
        """
        now = datetime.now()
        date_str = now.strftime('%Y年%m月%d日')
        weekday = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][now.weekday()]

        report = f"""# A股尾盘选股分析报告

**日期**: {date_str} {weekday}
**选股时间**: {now.strftime('%H:%M:%S')}
**选股策略**: 涨幅2%-7%，量比>1.5，换手率2%-15%

---

## 📊 选股概览

今日尾盘选出 **{len(selected_stocks)}** 只符合条件的个股

---

## 🎯 选股结果明细表

| 排名 | 代码 | 名称 | 现价 | 涨幅 | 量比 | 换手率 | 市值 | 市盈率 | 行业 | 得分 |
|------|------|------|------|------|------|--------|------|--------|------|------|
"""

        for i, stock in enumerate(selected_stocks, 1):
            # 安全处理market_cap
            try:
                if isinstance(stock['market_cap'], (int, float)) and stock['market_cap'] > 0:
                    market_cap = stock['market_cap'] / 100000000
                else:
                    market_cap = 0
            except:
                market_cap = 0

            # 安全处理pe_ratio
            try:
                pe = stock['pe_ratio'] if stock['pe_ratio'] else 0
            except:
                pe = 0

            report += f"| {i} | {stock['code']} | {stock['name']} | {stock['price']:.2f} | +{stock['change_pct']:.2f}% | {stock['volume_ratio']:.2f} | {stock['turnover']:.2f}% | {market_cap:.2f}亿 | {pe:.2f} | {stock.get('industry', '-')} | {stock.get('score', 0)} |\n"

        # 添加详细分析
        report += "\n## 📋 个股详细分析\n\n"

        for i, stock in enumerate(selected_stocks, 1):
            report += f"### {i}. {stock['name']} ({stock['code']})\n\n"

            # 基础信息
            report += "**基础信息**:\n"
            report += f"- 现价: {stock['price']:.2f}元\n"
            report += f"- 涨跌幅: +{stock['change_pct']:.2f}%\n"
            report += f"- 量比: {stock['volume_ratio']:.2f}\n"
            report += f"- 换手率: {stock['turnover']:.2f}%\n"
            report += f"- 涨速: {stock.get('speed', 0):.2f}\n"

            # 获取详细信息
            detail = self.get_stock_detail(stock['code'])

            report += "\n**公司基本面**:\n"
            if detail['market_cap']:
                report += f"- 总市值: {detail['market_cap']}\n"
            if detail['pe_ratio'] and detail['pe_ratio'] != '-':
                report += f"- 市盈率: {detail['pe_ratio']}\n"
            if detail['pb_ratio'] and detail['pb_ratio'] != '-':
                report += f"- 市净率: {detail['pb_ratio']}\n"
            if detail['roe'] and detail['roe'] != '-':
                report += f"- ROE: {detail['roe']}\n"
            if detail['net_profit'] and detail['net_profit'] != '-':
                report += f"- 净利润: {detail['net_profit']}\n"
            if detail['revenue'] and detail['revenue'] != '-':
                report += f"- 营业收入: {detail['revenue']}\n"
            if detail['profit_growth'] and detail['profit_growth'] != '-':
                report += f"- 净利润增长率: {detail['profit_growth']}\n"
            if detail['revenue_growth'] and detail['revenue_growth'] != '-':
                report += f"- 营收增长率: {detail['revenue_growth']}\n"

            if detail['industry']:
                report += f"\n**所属行业**: {detail['industry']}\n"

            if detail['concepts']:
                report += f"**相关概念**: {detail['concepts']}\n"

            if detail['business']:
                report += f"\n**公司简介**:\n{detail['business']}\n"

            if detail['news']:
                report += f"\n**近期消息**:\n"
                for news in detail['news']:
                    report += f"- {news}\n"

            report += "\n---\n\n"

        # 添加选股说明
        report += "## 📝 选股策略说明\n\n"
        report += "**选股条件**:\n"
        report += f"- 涨幅范围: {self.strategy_params['min_change']}% - {self.strategy_params['max_change']}%\n"
        report += f"- 价格区间: {self.strategy_params['min_price']} - {self.strategy_params['max_price']}元\n"
        report += f"- 量比: ≥{self.strategy_params['min_volume_ratio']}\n"
        report += f"- 换手率: {self.strategy_params['min_turnover']}% - {self.strategy_params['max_turnover']}%\n"
        report += f"- 市值范围: {self.strategy_params['min_market_cap']} - {self.strategy_params['max_market_cap']}亿元\n"
        report += "- 过滤ST股票\n"

        report += "\n**评分标准**:\n"
        report += "- 涨速分: 尾盘强势拉升得分更高\n"
        report += "- 量比分: 放量程度得分\n"
        report += "- 换手率分: 适度换手更优\n"
        report += "- 涨幅分: 适中涨幅得分\n"
        report += "- 位置分: 低位启动更优\n"

        report += "\n---\n\n"
        report += "**⚠️ 风险提示**\n\n"
        report += "1. 本选股结果仅供参考，不构成投资建议\n"
        report += "2. 尾盘强势不代表次日一定上涨\n"
        report += "3. 投资有风险，入市需谨慎\n"
        report += "4. 请结合个人风险承受能力做出投资决策\n"

        report += f"\n---\n\n*报告生成时间: {now.strftime('%Y-%m-%d %H:%M:%S')}*\n"

        return report

    def save_report(self, report: str, filename: str = None):
        """保存报告到文件"""
        if filename is None:
            now = datetime.now()
            filename = f"close_market_selection_{now.strftime('%Y%m%d')}.md"

        os.makedirs('reports', exist_ok=True)
        filepath = os.path.join('reports', filename)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(report)

        print(f"报告已保存到: {filepath}")
        return filepath

    def run_selection(self):
        """运行选股流程"""
        print("=" * 50)
        print("开始尾盘选股分析...")
        print("=" * 50)

        # 获取市场数据
        stocks = self.get_market_data()
        if not stocks:
            print("未能获取有效数据，选股终止")
            self._save_empty_report()
            return

        print(f"获取到 {len(stocks)} 只股票数据")

        # 筛选股票
        selected = self.filter_stocks(stocks)
        print(f"筛选出 {len(selected)} 只符合条件的股票")

        if not selected:
            print("未找到符合条件的股票")
            self._save_empty_report()
            return

        # 显示选中的股票
        print("\n选中的股票:")
        for i, stock in enumerate(selected, 1):
            print(f"{i}. {stock['name']} ({stock['code']}) - 涨幅: {stock['change_pct']}%, 得分: {stock['score']}")

        # 生成报告
        report = self.generate_selection_report(selected)

        # 保存报告
        self.save_report(report)

        print("\n" + "=" * 50)
        print("选股完成！")
        print("=" * 50)

    def _save_empty_report(self):
        """生成空选股报告"""
        now = datetime.now()
        date_str = now.strftime('%Y年%m月%d日')
        weekday = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][now.weekday()]

        report = f"""# A股尾盘选股分析报告

**日期**: {date_str} {weekday}
**选股时间**: {now.strftime('%H:%M:%S')}

---

## ⚠️ 未找到符合条件的股票

当前未找到符合选股策略的股票。

**选股条件**:
- 涨幅: {self.strategy_params['min_change']}% - {self.strategy_params['max_change']}%
- 价格: {self.strategy_params['min_price']} - {self.strategy_params['max_price']}元
- 量比: ≥{self.strategy_params['min_volume_ratio']}
- 换手率: {self.strategy_params['min_turnover']}% - {self.strategy_params['max_turnover']}%
- 市值: {self.strategy_params['min_market_cap']} - {self.strategy_params['max_market_cap']}亿元

**可能原因**:
1. 当前为非交易时间
2. 市场表现平淡，无符合条件个股
3. 选股策略过于严格

**建议**:
- 调整选股策略参数
- 在交易日14:30后重新运行

---

*报告生成时间: {now.strftime('%Y-%m-%d %H:%M:%S')}*
"""

        self.save_report(report)


def main():
    """主函数"""
    selector = CloseMarketSelector()
    selector.run_selection()


if __name__ == "__main__":
    main()
