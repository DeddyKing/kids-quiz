#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
A股早盘竞价分析程序
每个交易日9:25分自动运行，分析竞价情况
"""

import requests
import json
from datetime import datetime, time
import re
from typing import List, Dict, Tuple
import os


class AuctionAnalyzer:
    """早盘竞价分析器"""

    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }

        # 行业板块映射
        self.industry_mapping = {
            '电子': '电子',
            '计算机': '计算机',
            '通信': '通信',
            '医药生物': '医药生物',
            '电力设备': '电力设备',
            '机械设备': '机械设备',
            '汽车': '汽车',
            '基础化工': '基础化工',
            '有色金属': '有色金属',
            '食品饮料': '食品饮料',
            '家用电器': '家用电器',
            '房地产': '房地产',
            '建筑材料': '建筑材料',
            '建筑装饰': '建筑装饰',
            '钢铁': '钢铁',
            '煤炭': '煤炭',
            '石油石化': '石油石化',
            '公用事业': '公用事业',
            '交通运输': '交通运输',
            '农林牧渔': '农林牧渔',
            '轻工制造': '轻工制造',
            '纺织服饰': '纺织服饰',
            '商贸零售': '商贸零售',
            '社会服务': '社会服务',
            '传媒': '传媒',
            '银行': '银行',
            '非银金融': '非银金融',
            '国防军工': '国防军工',
            '美容护理': '美容护理',
            '环保': '环保',
            '综合': '综合',
        }

    def get_auction_data(self) -> List[Dict]:
        """
        获取早盘竞价数据
        使用新浪/东方财富API获取9:25竞价数据
        """
        # 尝试东方财富API
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
                'fs': 'm:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23',  # A股所有
                'fields': 'f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152'
            }

            response = requests.get(url, params=params, headers=self.headers, timeout=15)

            if response.status_code == 200:
                result = response.json()
                if result.get('rc') == 0 and 'data' in result:
                    diff = result['data']['diff']
                    stocks = self._parse_eastmoney_data(diff)
                    print(f"成功获取 {len(stocks)} 只股票数据")
                    return stocks
                else:
                    print(f"API返回错误: {result.get('rt', -1)}, 尝试备用数据源...")
                    return self._get_sina_data()
            else:
                print(f"获取数据失败，状态码: {response.status_code}, 尝试备用数据源...")
                return self._get_sina_data()

        except Exception as e:
            print(f"获取竞价数据时出错: {e}, 尝试备用数据源...")
            return self._get_sina_data()

    def _get_sina_data(self) -> List[Dict]:
        """
        使用新浪API获取股票数据作为备用
        """
        # 新浪实时行情API
        url = "http://hq.sinajs.cn/list="
        stocks = []

        try:
            # 获取沪深A股列表（分批获取）
            # 这里使用新浪的批量API
            batch_urls = []

            # 沪市主板 (600000-600999)
            batch_urls.append("sh600000,sh600001,sh600002,sh600003,sh600004,sh600005,sh600006,sh600007,sh600008,sh600009,sh600010,sh600011,sh600012,sh600013,sh600014,sh600015,sh600016,sh600017,sh600018,sh600019")

            # 构造获取链接
            urls_to_fetch = [
                # 获取一些样本股票用于测试
                "http://hq.sinajs.cn/list=s_sh000001,s_sz000001,s_sh600000,s_sz000001,s_sh600036,s_sz000002,s_sh600519,s_sz000333"
            ]

            for url in urls_to_fetch:
                try:
                    response = requests.get(url, headers=self.headers, timeout=10)
                    if response.status_code == 200:
                        data = response.text
                        stocks.extend(self._parse_sina_line_data(data))
                except:
                    continue

            print(f"从新浪API获取到 {len(stocks)} 只股票数据")
            return stocks

        except Exception as e:
            print(f"新浪API也失败了: {e}")
            return []

    def _parse_sina_line_data(self, data: str) -> List[Dict]:
        """解析新浪行式数据"""
        stocks = []

        lines = data.strip().split('\n')
        for line in lines:
            try:
                # 数据格式: var hq_str_sh600000="浦发银行,9.82,9.84,9.78,9.89,9.77,9.84,9.85,97241719,960834698,0.00,0.00,9.83,9.82,2,9.82,9.83,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00"
                if 'hq_str_' in line and '=' in line and '"' in line:
                    code_part = line.split('=')[0].split('_')[-1]
                    code = code_part.replace('"', '').replace(';', '').strip()

                    # 提取数据部分
                    data_part = line.split('"')[1]
                    fields = data_part.split(',')

                    if len(fields) >= 32:
                        name = fields[0]
                        open_price = float(fields[1]) if fields[1] else 0
                        pre_close = float(fields[2]) if fields[2] else 0

                        if not name or open_price == 0 or pre_close == 0:
                            continue

                        change_pct = ((open_price - pre_close) / pre_close) * 100

                        stocks.append({
                            'code': code,
                            'name': name,
                            'open': open_price,
                            'pre_close': pre_close,
                            'change_pct': round(change_pct, 2),
                            'volume': int(float(fields[8])) if fields[8] else 0,
                            'amount': float(fields[9]) if fields[9] else 0,
                            'industry': '未知',
                        })

            except:
                continue

        return stocks

    def _parse_eastmoney_data(self, diff_data: List) -> List[Dict]:
        """
        解析东方财富API返回的数据
        字段说明参考：https://data.eastmoney.com/center/EM_Quota_API.html
        """
        stocks = []

        for item in diff_data:
            try:
                # f12: 股票代码
                # f14: 股票名称
                # f2: 最新价 (开盘价)
                # f3: 涨跌幅(%)
                # f4: 涨跌额
                # f15: 最高价
                # f16: 最低价
                # f17: 昨收价
                # f18: 成交量
                # f19: 成交额
                # f20: 量比
                # f22: 换手率(%)
                # f62: 涨速
                # f136: 市盈率-动态
                # f139: 市盈率
                # f137: 市净率
                # f9: 昨收价
                code = item.get('f12', '')
                name = item.get('f14', '')
                open_price = item.get('f2', 0)
                pre_close = item.get('f17', 0) or item.get('f9', 0)
                change_pct = item.get('f3', 0)
                volume = item.get('f18', 0)
                amount = item.get('f19', 0)
                industry = item.get('f62', '未知')

                if not code or not name:
                    continue

                # 如果f17（昨收价）为空，根据涨跌幅反推
                if pre_close == 0 and open_price != 0 and change_pct != 0:
                    pre_close = open_price / (1 + change_pct / 100)

                if pre_close == 0:
                    continue

                stocks.append({
                    'code': code,
                    'name': name,
                    'open': float(open_price),
                    'pre_close': float(pre_close),
                    'change_pct': round(change_pct, 2),
                    'volume': int(volume),
                    'amount': float(amount),
                    'industry': industry,
                })

            except Exception as e:
                continue

        return stocks

    def get_sector_data(self, stocks: List[Dict]) -> Dict[str, Dict]:
        """
        分析板块数据
        """
        sector_stats = {}

        for stock in stocks:
            # 尝试从股票名称推断行业
            industry = str(stock.get('industry', '其他')) if stock.get('industry') else '其他'

            # 标准化行业名称
            for key, value in self.industry_mapping.items():
                if key in industry or industry in key:
                    industry = value
                    break

            change_pct = stock.get('change_pct', 0)

            # 判断是否涨停（开盘涨幅≥9.9%）
            is_limit_up = change_pct >= 9.9

            # 判断是否高开（涨幅>3%）
            is_high_open = change_pct > 3

            # 判断是否大幅低开（跌幅<-5%）
            is_deep_low = change_pct < -5

            if industry not in sector_stats:
                sector_stats[industry] = {
                    'stocks': [],
                    'avg_change': 0,
                    'limit_up_count': 0,
                    'high_open_count': 0,
                    'deep_low_count': 0,
                    'total_volume': 0,
                    'total_amount': 0
                }

            sector_stats[industry]['stocks'].append(stock)
            sector_stats[industry]['avg_change'] += change_pct
            sector_stats[industry]['total_volume'] += stock['volume']
            sector_stats[industry]['total_amount'] += stock['amount']

            if is_limit_up:
                sector_stats[industry]['limit_up_count'] += 1
            if is_high_open:
                sector_stats[industry]['high_open_count'] += 1
            if is_deep_low:
                sector_stats[industry]['deep_low_count'] += 1

        # 计算平均涨幅
        for sector in sector_stats:
            count = len(sector_stats[sector]['stocks'])
            if count > 0:
                sector_stats[sector]['avg_change'] = round(
                    sector_stats[sector]['avg_change'] / count, 2
                )

        return sector_stats

    def get_hot_sectors(self, sector_stats: Dict[str, Dict], top_n: int = 10) -> List[Tuple[str, Dict]]:
        """
        获取热门板块
        排序规则：
        1. 涨停股数多的优先
        2. 平均涨幅高的优先
        3. 高开股数多的优先
        """
        sectors_list = []

        for sector, stats in sector_stats.items():
            if len(stats['stocks']) < 3:  # 过滤股票数太少的板块
                continue

            # 综合得分：涨停权重最高，其次是高开，最后是平均涨幅
            score = (
                stats['limit_up_count'] * 100 +
                stats['high_open_count'] * 10 +
                stats['avg_change']
            )

            sectors_list.append((sector, stats, score))

        # 按得分排序
        sectors_list.sort(key=lambda x: x[2], reverse=True)

        return [(s[0], s[1]) for s in sectors_list[:top_n]]

    def get_hot_sub_sectors(self, stocks: List[Dict]) -> List[Dict]:
        """
        获取热门细分板块（概念板块）
        通过分析股票名称和关键词识别概念热度
        """
        concept_keywords = {
            'AI/人工智能': ['AI', '人工智能', '智能', '智慧'],
            'ChatGPT/AIGC': ['ChatGPT', 'AIGC', '生成式', '大模型', '智脑'],
            'CPO/光模块': ['CPO', '光模块', '光通信', '光器件'],
            '机器人': ['机器人', '智能制造', '工业自动化', '伺服', '减速器'],
            '低空经济': ['低空', '无人机', 'eVTOL', '飞行', '航空'],
            '算力': ['算力', '数据中心', 'IDC', '服务器', '算网'],
            '无人驾驶': ['无人驾驶', '自动驾驶', '智能驾驶', '车联网', '辅助驾驶'],
            '固态电池': ['固态电池', '固态', '固态电解质'],
            '飞行汽车': ['飞行汽车', 'eVTOL'],
            '卫星导航': ['卫星', '导航', '北斗', '遥感'],
            '量子计算': ['量子', '量子通信'],
            '脑机接口': ['脑机'],
            '超导': ['超导'],
            '核聚变': ['核聚变', '可控核聚变', '核能'],
            '合成生物': ['合成生物'],
            '人形机器人': ['人形机器人'],
            '新能源车': ['新能源车', '电动汽车', '新能源汽车', '动力电池', '锂电'],
            '储能': ['储能', '电池储能', '抽水蓄能'],
            '虚拟电厂': ['虚拟电厂'],
            '液冷': ['液冷', '冷却'],
            '数据中心': ['数据中心', '算力中心', '云中心'],
            'GPU/芯片': ['GPU', '芯片', '半导体', '集成电路', '芯片设计', '芯片制造'],
            '存储芯片': ['存储', '闪存', 'DRAM', 'NAND', '存储器'],
            '先进封装': ['封装', '先进封装', 'Chiplet'],
            'HBM': ['HBM', '高带宽', '显存'],
            '华为概念': ['华为'],
            '苹果概念': ['苹果'],
            '小米概念': ['小米'],
            '汽车电子': ['汽车电子', '车用', '车载'],
            '工业母机': ['工业母机', '数控', '机床'],
            '中字头': ['中字', '中国', '央企'],
            '国企改革': ['国企', '央企', '改革'],
            '数字经济': ['数字', '数字化', '数智'],
            '数据要素': ['数据要素', '数据确权', '数据交易'],
            '东数西算': ['东数西算'],
            '智慧城市': ['智慧城市', '城市大脑'],
            '物联网': ['物联网', 'IoT'],
            '元宇宙': ['元宇宙'],
            '数字孪生': ['数字孪生'],
            '6G': ['6G'],
            '卫星互联网': ['卫星互联网', '星链'],
            '商业航天': ['商业航天', '民营航天'],
            '高端装备': ['高端装备', '装备制造'],
            '专精特新': ['专精特新'],
            '北交所': ['北交所'],
            '跨境支付': ['跨境支付', '支付'],
            '数字货币': ['数字货币', 'CBDC', '数字人民币'],
            '跨境数据': ['跨境数据'],
            '国产软件': ['国产软件', '信创', '自主可控'],
            '操作系统': ['操作系统', 'OS'],
            '数据库': ['数据库'],
            '中间件': ['中间件'],
            '网络安全': ['网络安全', '网安', '信息安全', '安全'],
            '云计算': ['云计算', '云服务', '公有云', '私有云'],
            '边缘计算': ['边缘计算'],
            'SaaS': ['SaaS', '软件服务'],
            '5G应用': ['5G应用', '5G+', '5G'],
            '工业互联网': ['工业互联网', '工业4.0'],
            '智能制造': ['智能制造', '智能工厂'],
            '智能家居': ['智能家居', '全屋智能'],
            '智能电网': ['智能电网', '电网'],
            '特高压': ['特高压'],
            '光伏': ['光伏', '太阳能', '硅片', '电池片'],
            '风电': ['风电', '风力', '风机'],
            '氢能': ['氢能', '氢', '燃料电池'],
            '碳中和': ['碳中和', '碳达峰', '双碳'],
            '环保': ['环保', '环境', '污染治理'],
            '新能源': ['新能源', '清洁能源'],
            '锂电池': ['锂电', '锂电池', '正极', '负极', '电解液'],
            '钠离子电池': ['钠电', '钠离子'],
            '钒电池': ['钒电池', '钒液流'],
            '医药': ['医药', '生物', '制药', '疫苗'],
            '中药': ['中药'],
            '创新药': ['创新药'],
            'CRO': ['CRO', '临床', '研发'],
            '医疗器械': ['医疗', '器械'],
            '医疗服务': ['医疗', '服务'],
            '医美': ['医美', '美容'],
            '眼科': ['眼科'],
            '牙科': ['牙科', '口腔'],
            '辅助生殖': ['辅助生殖'],
            '生物医药': ['生物', '基因', '蛋白'],
            '细胞治疗': ['细胞', '免疫'],
            '医美生物': ['生物', '护肤'],
            '消费': ['消费', '零售', '百货', '商超'],
            '白酒': ['白酒', '酒'],
            '食品': ['食品', '调味品', '预制菜'],
            '农业': ['农业', '种业', '饲料', '养殖'],
            '养殖': ['养殖', '畜牧', '水产'],
            '预制菜': ['预制菜'],
            '酒店餐饮': ['酒店', '餐饮'],
            '旅游': ['旅游', '景区', '免税'],
            '影视': ['影视', '电影', '传媒'],
            '游戏': ['游戏', '电竞'],
            '体育': ['体育', '健身'],
            '教育': ['教育', '培训'],
            '地产': ['地产', '物业'],
            '建筑': ['建筑', '工程'],
            '建材': ['建材', '水泥', '玻璃'],
            '钢铁': ['钢铁', '钢'],
            '有色': ['有色', '金属', '铜', '铝', '锂', '钴', '镍'],
            '煤炭': ['煤炭', '煤'],
            '石油': ['石油', '石化', '油'],
            '化工': ['化工', '化学'],
            '造纸': ['造纸', '纸'],
            '纺织': ['纺织', '服装', '面料'],
            '轻工': ['轻工', '家居', '家具'],
            '物流': ['物流', '快递', '运输'],
            '港口': ['港口', '航运'],
            '航空': ['航空', '机场'],
            '铁路': ['铁路', '轨交', '地铁'],
            '公交': ['公交'],
            '银行': ['银行'],
            '证券': ['证券', '券商'],
            '保险': ['保险'],
            '信托': ['信托'],
            '租赁': ['租赁'],
            '公用事业': ['公用', '水务', '燃气', '电力'],
        }

        concept_stats = {}

        for stock in stocks:
            name = stock.get('name', '')
            change_pct = stock.get('change_pct', 0)

            for concept, keywords in concept_keywords.items():
                for keyword in keywords:
                    if keyword in name:
                        if concept not in concept_stats:
                            concept_stats[concept] = {
                                'stocks': [],
                                'avg_change': 0,
                                'limit_up_count': 0,
                                'high_open_count': 0
                            }

                        concept_stats[concept]['stocks'].append(stock)
                        concept_stats[concept]['avg_change'] += change_pct

                        if change_pct >= 9.9:
                            concept_stats[concept]['limit_up_count'] += 1
                        elif change_pct > 3:
                            concept_stats[concept]['high_open_count'] += 1

        # 计算平均涨幅并排序
        hot_concepts = []
        for concept, stats in concept_stats.items():
            if len(stats['stocks']) < 2:
                continue

            stats['avg_change'] = round(stats['avg_change'] / len(stats['stocks']), 2)

            # 综合得分
            score = (
                stats['limit_up_count'] * 100 +
                stats['high_open_count'] * 10 +
                stats['avg_change']
            )

            hot_concepts.append({
                'concept': concept,
                'stats': stats,
                'score': score
            })

        hot_concepts.sort(key=lambda x: x['score'], reverse=True)

        return hot_concepts[:10]

    def get_top_stocks(self, stocks: List[Dict], top_n: int = 20) -> List[Dict]:
        """
        获取竞价涨幅最高的股票
        """
        # 过滤有效数据
        valid_stocks = [stock for stock in stocks if stock.get('pre_close', 0) > 0]

        # 按涨幅排序
        valid_stocks.sort(key=lambda x: x.get('change_pct', 0), reverse=True)

        return valid_stocks[:top_n]

    def generate_report(self, hot_sectors: List[Tuple[str, Dict]],
                        hot_sub_sectors: List[Dict],
                        top_stocks: List[Dict]) -> str:
        """
        生成分析报告（Markdown格式）
        """
        now = datetime.now()
        date_str = now.strftime('%Y年%m月%d日')
        weekday = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][now.weekday()]

        report = f"""# A股早盘竞价分析报告

**日期**: {date_str} {weekday}
**分析时间**: {now.strftime('%H:%M:%S')}

---

## 📊 市场概况

本报告基于早盘9:25集合竞价数据，分析当日市场资金流向和热门板块。

---

## 🔥 今日热门板块

根据竞价数据，今日最热门的板块如下：

| 排名 | 板块名称 | 平均涨幅 | 涨停股数 | 高开股数 | 板块股票数 |
|------|----------|----------|----------|----------|------------|
"""

        for i, (sector, stats) in enumerate(hot_sectors, 1):
            report += f"| {i} | {sector} | {stats['avg_change']}% | {stats['limit_up_count']} | {stats['high_open_count']} | {len(stats['stocks'])} |\n"

        report += "\n"

        # 添加板块详细分析
        report += "### 🎯 板块详细分析\n\n"
        for i, (sector, stats) in enumerate(hot_sectors[:5], 1):
            report += f"**{i}. {sector}**\n\n"
            report += f"- 平均涨幅: {stats['avg_change']}%\n"
            report += f"- 涨停股数: {stats['limit_up_count']}\n"
            report += f"- 高开股数: {stats['high_open_count']}\n"
            report += f"- 板块股票数: {len(stats['stocks'])}\n"

            if stats['limit_up_count'] > 0:
                report += f"\n**涨停股票**:\n"
                for stock in stats['stocks']:
                    if stock.get('change_pct', 0) >= 9.9:
                        report += f"- {stock['name']} ({stock['code']}) +{stock['change_pct']}%\n"

            report += "\n"

        # 添加细分板块
        report += "## 🎨 今日热门细分板块（概念热点）\n\n"
        report += "| 排名 | 概念名称 | 涨停股数 | 高开股数 | 平均涨幅 | 涉及股票数 |\n"
        report += "|------|----------|----------|----------|----------|------------|\n"

        for i, item in enumerate(hot_sub_sectors, 1):
            report += f"| {i} | {item['concept']} | {item['stats']['limit_up_count']} | {item['stats']['high_open_count']} | {item['stats']['avg_change']}% | {len(item['stats']['stocks'])} |\n"

        report += "\n"

        # 添加概念详细分析
        report += "### 💡 概念详细分析\n\n"
        for i, item in enumerate(hot_sub_sectors[:5], 1):
            report += f"**{i}. {item['concept']}**\n\n"
            report += f"- 涨停股数: {item['stats']['limit_up_count']}\n"
            report += f"- 高开股数: {item['stats']['high_open_count']}\n"
            report += f"- 平均涨幅: {item['stats']['avg_change']}%\n"

            # 显示代表性股票
            if item['stats']['limit_up_count'] > 0:
                report += f"\n**涨停/大涨股票**:\n"
                for stock in item['stats']['stocks'][:5]:
                    if stock.get('change_pct', 0) >= 5:
                        report += f"- {stock['name']} ({stock['code']}) +{stock['change_pct']}%\n"
            elif item['stats']['high_open_count'] > 0:
                report += f"\n**高开股票**:\n"
                for stock in item['stats']['stocks'][:5]:
                    if stock.get('change_pct', 0) > 3:
                        report += f"- {stock['name']} ({stock['code']}) +{stock['change_pct']}%\n"

            report += "\n"

        # 添加热门股票
        report += "## 📈 竞价涨幅TOP20股票\n\n"
        report += "| 排名 | 股票代码 | 股票名称 | 开盘价 | 昨收价 | 竞价涨幅 | 所属行业 |\n"
        report += "|------|----------|----------|--------|--------|----------|----------|\n"

        for i, stock in enumerate(top_stocks, 1):
            industry = stock.get('industry', '未知')
            report += f"| {i} | {stock['code']} | {stock['name']} | {stock['open']:.2f} | {stock['pre_close']:.2f} | +{stock['change_pct']}% | {industry} |\n"

        # 添加市场分析总结
        report += "\n## 📋 市场分析总结\n\n"

        if hot_sectors:
            top_sector = hot_sectors[0]
            top_sector_name = top_sector[0]
            top_sector_stats = top_sector[1]

            report += f"**今日市场主线**: {top_sector_name}\n\n"

            if top_sector_stats['limit_up_count'] >= 3:
                report += f"- {top_sector_name}板块表现强势，有{top_sector_stats['limit_up_count']}只股票竞价涨停\n"
                report += f"- 资金明显流入该板块，今日可重点关注\n"
            elif top_sector_stats['high_open_count'] >= 5:
                report += f"- {top_sector_name}板块集体高开，有{top_sector_stats['high_open_count']}只股票高开超3%\n"
                report += f"- 资金关注度较高，建议跟踪观察\n"
            else:
                report += f"- {top_sector_name}板块平均涨幅{top_sector_stats['avg_change']}%，小幅领涨\n"

            # 分析概念热度
            if hot_sub_sectors:
                top_concept = hot_sub_sectors[0]
                if top_concept['stats']['limit_up_count'] > 0:
                    report += f"\n**概念热点**: {top_concept['concept']}\n"
                    report += f"- 该概念有{top_concept['stats']['limit_up_count']}只股票竞价涨停，资金追逐明显\n"
                    report += f"- 涉及{len(top_concept['stats']['stocks'])}只相关股票，平均涨幅{top_concept['stats']['avg_change']}%\n"

        # 添加风险提示
        report += "\n---\n\n"
        report += "**⚠️ 风险提示**\n\n"
        report += "1. 竞价数据仅供参考，不构成投资建议\n"
        report += "2. 竞价涨停不代表收盘一定涨停，开盘后可能变化\n"
        report += "3. 投资有风险，入市需谨慎\n"
        report += "4. 请结合成交量、换手率等多维度指标综合分析\n"

        report += f"\n---\n\n*报告生成时间: {now.strftime('%Y-%m-%d %H:%M:%S')}*\n"

        return report

    def save_report(self, report: str, filename: str = None):
        """保存报告到文件"""
        if filename is None:
            now = datetime.now()
            filename = f"auction_report_{now.strftime('%Y%m%d')}.md"

        # 确保目录存在
        os.makedirs('reports', exist_ok=True)
        filepath = os.path.join('reports', filename)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(report)

        print(f"报告已保存到: {filepath}")
        return filepath

    def run_analysis(self):
        """运行完整分析流程"""
        print("=" * 50)
        print("开始早盘竞价分析...")
        print("=" * 50)

        # 获取竞价数据
        stocks = self.get_auction_data()
        if not stocks:
            print("未能获取有效数据，分析终止")
            # 生成一个空报告说明原因
            self._save_empty_report()
            return

        # 分析板块数据
        sector_stats = self.get_sector_data(stocks)
        print(f"分析完成，共发现 {len(sector_stats)} 个板块")

        # 获取热门板块
        hot_sectors = self.get_hot_sectors(sector_stats)
        print(f"热门板块数量: {len(hot_sectors)}")

        # 获取热门细分板块
        hot_sub_sectors = self.get_hot_sub_sectors(stocks)
        print(f"热门细分板块数量: {len(hot_sub_sectors)}")

        # 获取涨幅TOP股票
        top_stocks = self.get_top_stocks(stocks)

        # 生成报告
        report = self.generate_report(hot_sectors, hot_sub_sectors, top_stocks)

        # 保存报告
        self.save_report(report)

        print("=" * 50)
        print("分析完成！")
        print("=" * 50)

    def _save_empty_report(self):
        """生成空数据报告"""
        now = datetime.now()
        date_str = now.strftime('%Y年%m月%d日')
        weekday = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][now.weekday()]

        report = f"""# A股早盘竞价分析报告

**日期**: {date_str} {weekday}
**分析时间**: {now.strftime('%H:%M:%S')}

---

## ⚠️ 数据获取失败

当前时间可能为非交易时间或API接口暂时无法访问。

**可能原因**:
1. 当前为非交易日（周末或节假日）
2. 当前为非交易时间（数据通常在9:25-15:30可获取）
3. API接口限流或暂时不可用

**建议**:
- 请在交易日9:25分后重新运行
- 或使用GitHub Actions自动运行（每个交易日9:25分自动执行）

---

*报告生成时间: {now.strftime('%Y-%m-%d %H:%M:%S')}*
"""

        self.save_report(report)


def main():
    """主函数"""
    analyzer = AuctionAnalyzer()
    analyzer.run_analysis()


if __name__ == "__main__":
    main()
