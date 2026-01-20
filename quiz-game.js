// 题库 - 语文和古诗词（共600题）
const questionBank = {
    easy: [
        // 古诗词类（100题）
        {category: "古诗词", question: "床前明月光，疑是地上霜。这首诗的作者是谁？", options: ["李白", "杜甫", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "春眠不觉晓，处处闻啼鸟。这句诗下一句是什么？", options: ["夜来风雨声", "花落知多少", "空山不见人", "欲穷千里目"], answer: 1},
        {category: "古诗词", question: "白日依山尽，黄河入海流。这首诗的题目是？", options: ["静夜思", "登鹳雀楼", "春晓", "江雪"], answer: 1},
        {category: "古诗词", question: "红豆生南国，春来发几枝。这首诗的作者是？", options: ["李白", "王维", "杜甫", "孟浩然"], answer: 1},
        {category: "古诗词", question: "谁知盘中餐，粒粒皆辛苦。这首诗的题目是？", options: ["悯农", "春晓", "咏鹅", "静夜思"], answer: 0},
        {category: "古诗词", question: "鹅鹅鹅，曲项向天歌。这句诗的作者是？", options: ["李白", "骆宾王", "王维", "杜甫"], answer: 1},
        {category: "古诗词", question: "千山鸟飞绝，万径人踪灭。这首诗写的是什么季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 3},
        {category: "古诗词", question: "举头望明月，低头思故乡。这首诗的题目是？", options: ["登鹳雀楼", "静夜思", "春晓", "江雪"], answer: 1},
        {category: "古诗词", question: "离离原上草，一岁一枯荣。这首诗的作者是？", options: ["李白", "杜甫", "白居易", "王维"], answer: 2},
        {category: "古诗词", question: "欲穷千里目，更上一层楼。这句诗的上一句是？", options: ["白日依山尽", "黄河入海流", "春风吹又生", "孤舟蓑笠翁"], answer: 0},
        {category: "古诗词", question: "随风潜入夜，润物细无声。这句诗描写的是什么？", options: ["春风", "春雨", "春花", "春草"], answer: 1},
        {category: "古诗词", question: "慈母手中线，游子身上衣。这首诗的作者是？", options: ["李白", "杜甫", "孟郊", "白居易"], answer: 2},
        {category: "古诗词", question: "小荷才露尖尖角，早有蜻蜓立上头。这首诗写的是什么季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 1},
        {category: "古诗词", question: "飞流直下三千尺，疑是银河落九天。这句诗描写的是？", options: ["黄河", "长江", "瀑布", "雨"], answer: 2},
        {category: "古诗词", question: "桃花潭水深千尺，不及汪伦送我情。这首诗的作者是？", options: ["李白", "杜甫", "王维", "孟浩然"], answer: 0},
        {category: "古诗词", question: "孤舟蓑笠翁，独钓寒江雪。这句诗出自？", options: ["《江雪》", "《咏雪》", "《雪梅》", "《冬雪》"], answer: 0},
        {category: "古诗词", question: "日出江花红胜火，春来江水绿如蓝。这句诗描写的是？", options: ["江边风景", "海边", "湖边", "河边"], answer: 0},
        {category: "古诗词", question: "黄四娘家花满蹊，千朵万朵压枝低。这首诗的作者是？", options: ["李白", "杜甫", "白居易", "王维"], answer: 1},
        {category: "古诗词", question: "两个黄鹂鸣翠柳，一行白鹭上青天。这句诗的作者是？", options: ["李白", "杜甫", "王维", "白居易"], answer: 1},
        {category: "古诗词", question: "迟日江山丽，春风花草香。这句诗的作者是？", options: ["李白", "杜甫", "孟浩然", "王维"], answer: 1},
        {category: "古诗词", question: "泥融飞燕子，沙暖睡鸳鸯。这句诗描写的是哪个季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "野火烧不尽，春风吹又生。这句诗描写的是？", options: ["花朵", "野草", "树木", "庄稼"], answer: 1},
        {category: "古诗词", question: "清明时节雨纷纷，路上行人欲断魂。这首诗的作者是？", options: ["李白", "杜牧", "杜甫", "王维"], answer: 1},
        {category: "古诗词", question: "借问酒家何处有，牧童遥指杏花村。这首诗写的是哪个节日？", options: ["春节", "清明节", "中秋节", "端午节"], answer: 1},
        {category: "古诗词", question: "独在异乡为异客，每逢佳节倍思亲。这首诗的作者是？", options: ["李白", "王维", "杜甫", "白居易"], answer: 1},
        {category: "古诗词", question: "遥知兄弟登高处，遍插茱萸少一人。这句诗写的是哪个节日？", options: ["春节", "端午节", "重阳节", "中秋节"], answer: 2},
        {category: "古诗词", question: "春风又绿江南岸，明月何时照我还。这句诗的作者是？", options: ["王安石", "苏轼", "李白", "杜甫"], answer: 0},
        {category: "古诗词", question: "京口瓜洲一水间，钟山只隔数重山。这句诗写的是哪里的风景？", options: ["南京", "镇江", "扬州", "苏州"], answer: 1},
        {category: "古诗词", question: "爆竹声中一岁除，春风送暖入屠苏。这句诗写的是哪个节日？", options: ["春节", "元宵节", "端午节", "中秋节"], answer: 0},
        {category: "古诗词", question: "千门万户曈曈日，总把新桃换旧符。这句诗的作者是？", options: ["王安石", "苏轼", "李白", "杜甫"], answer: 0},
        {category: "古诗词", question: "小楼一夜听春雨，深巷明朝卖杏花。这句诗的作者是？", options: ["陆游", "辛弃疾", "苏轼", "范成大"], answer: 0},
        {category: "古诗词", question: "青箬笠，绿蓑衣，斜风细雨不须归。这句词的作者是？", options: ["张志和", "苏轼", "陆游", "范仲淹"], answer: 0},
        {category: "古诗词", question: "西塞山前白鹭飞，桃花流水鳜鱼肥。这句词描写的是哪个季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "竹外桃花三两枝，春江水暖鸭先知。这句诗的作者是？", options: ["苏轼", "王维", "李白", "杜甫"], answer: 0},
        {category: "古诗词", question: "蒌蒿满地芦芽短，正是河豚欲上时。这句诗描写的是？", options: ["春天", "夏天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "绿树阴浓夏日长，楼台倒影入池塘。这句诗描写的是哪个季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 1},
        {category: "古诗词", question: "水晶帘动微风起，满架蔷薇一院香。这句诗的作者是？", options: ["高骈", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "月落乌啼霜满天，江枫渔火对愁眠。这首诗的作者是？", options: ["张继", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "姑苏城外寒山寺，夜半钟声到客船。这首诗的题目是？", options: ["《枫桥夜泊》", "《江雪》", "《静夜思》", "《春晓》"], answer: 0},
        {category: "古诗词", question: "停车坐爱枫林晚，霜叶红于二月花。这句诗描写的是哪个季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 2},
        {category: "古诗词", question: "远上寒山石径斜，白云生处有人家。这首诗的作者是？", options: ["杜牧", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "山行这首诗描写的是什么季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 2},
        {category: "古诗词", question: "一道残阳铺水中，半江瑟瑟半江红。这句诗的作者是？", options: ["白居易", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "可怜九月初三夜，露似真珠月似弓。这句诗描写的是？", options: ["秋天的夜景", "春天的夜景", "夏天的夜景", "冬天的夜景"], answer: 0},
        {category: "古诗词", question: "日出江花红胜火，春来江水绿如蓝。这句诗出自？", options: ["《忆江南》", "《江南春》", "《春江花月夜》", "《江南曲》"], answer: 0},
        {category: "古诗词", question: "能不忆江南这首词的作者是？", options: ["白居易", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "草长莺飞二月天，拂堤杨柳醉春烟。这首诗描写的是哪个季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "儿童散学归来早，忙趁东风放纸鸢。这首诗的作者是？", options: ["高鼎", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "纸鸢指的是什么？", options: ["风筝", "纸船", "纸鹤", "纸花"], answer: 0},
        {category: "古诗词", question: "粉骨碎身浑不怕，要留清白在人间。这首诗的作者是？", options: ["于谦", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "千锤万凿出深山，烈火焚烧若等闲。这首诗写的是什么？", options: ["石灰", "煤炭", "钢铁", "玉石"], answer: 0},
        {category: "古诗词", question: "咬定青山不放松，立根原在破岩中。这首诗写的是哪种植物？", options: ["竹子", "松树", "梅花", "柳树"], answer: 0},
        {category: "古诗词", question: "千磨万击还坚劲，任尔东西南北风。这首诗的作者是？", options: ["郑燮", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "不要人夸好颜色，只留清气满乾坤。这首诗写的是哪种花？", options: ["梅花", "荷花", "菊花", "牡丹"], answer: 0},
        {category: "古诗词", question: "我家洗砚池头树，朵朵花开淡墨痕。这首诗的作者是？", options: ["王冕", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "墙角数枝梅，凌寒独自开。这句诗写的是哪种花？", options: ["梅花", "荷花", "菊花", "兰花"], answer: 0},
        {category: "古诗词", question: "遥知不是雪，为有暗香来。这首诗的作者是？", options: ["王安石", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "荷尽已无擎雨盖，菊残犹有傲霜枝。这句诗描写的是哪个季节？", options: ["秋天", "春天", "夏天", "冬天"], answer: 0},
        {category: "古诗词", question: "一年好景君须记，最是橙黄橘绿时。这句诗的作者是？", options: ["苏轼", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "接天莲叶无穷碧，映日荷花别样红。这句诗描写的是哪个季节？", options: ["夏天", "春天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "毕竟西湖六月中，风光不与四时同。这首诗的作者是？", options: ["杨万里", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "小荷才露尖尖角，早有蜻蜓立上头。这句诗的作者是？", options: ["杨万里", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "泉眼无声惜细流，树阴照水爱晴柔。这首诗的作者是？", options: ["杨万里", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "胜日寻芳泗水滨，无边光景一时新。这句诗描写的是哪个季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "等闲识得东风面，万紫千红总是春。这首诗的作者是？", options: ["朱熹", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "春色满园关不住，一枝红杏出墙来。这首诗的作者是？", options: ["叶绍翁", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "应怜屐齿印苍苔，小扣柴扉久不开。这首诗的题目是？", options: ["《游园不值》", "《春晓》", "《江雪》", "《静夜思》"], answer: 0},
        {category: "古诗词", question: "牧童骑黄牛，歌声振林樾。这首诗的作者是？", options: ["袁枚", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "意欲捕鸣蝉，忽然闭口立。这句诗写的是哪个季节？", options: ["夏天", "春天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "蓬头稚子学垂纶，侧坐莓苔草映身。这首诗的作者是？", options: ["胡令能", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "路人借问遥招手，怕得鱼惊不应人。这句诗写的是孩子在做什么？", options: ["钓鱼", "放风筝", "捉迷藏", "采花"], answer: 0},
        {category: "古诗词", question: "松下问童子，言师采药去。这首诗的作者是？", options: ["贾岛", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "只在此山中，云深不知处。这句诗出自？", options: ["《寻隐者不遇》", "《春晓》", "《静夜思》", "《江雪》"], answer: 0},
        {category: "古诗词", question: "江上往来人，但爱鲈鱼美。这首诗的作者是？", options: ["范仲淹", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "君看一叶舟，出没风波里。这首诗告诉我们什么？", options: ["捕鱼很危险", "江上风景美", "鱼很好吃", "船很漂亮"], answer: 0},
        {category: "古诗词", question: "日照香炉生紫烟，遥看瀑布挂前川。这首诗的作者是？", options: ["李白", "杜甫", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "飞流直下三千尺，疑是银河落九天。这首诗写的是哪个瀑布？", options: ["庐山瀑布", "黄果树瀑布", "壶口瀑布", "德天瀑布"], answer: 0},
        {category: "古诗词", question: "天门中断楚江开，碧水东流至此回。这首诗的作者是？", options: ["李白", "杜甫", "王维", "白居易"], answer: 0},
        {category: "古诗词", question: "两岸青山相对出，孤帆一片日边来。这句诗描写的是？", options: ["长江", "黄河", "湘江", "珠江"], answer: 0},
        {category: "古诗词", question: "故人西辞黄鹤楼，烟花三月下扬州。这首诗的作者是？", options: ["李白", "杜甫", "王维", "白居易"], answer: 0},
        {category: "古诗词", question: "孤帆远影碧空尽，唯见长江天际流。这句诗写的是？", options: ["送别", "重逢", "相遇", "离别"], answer: 0},
        {category: "古诗词", question: "朝辞白帝彩云间，千里江陵一日还。这首诗的作者是？", options: ["李白", "杜甫", "王维", "白居易"], answer: 0},
        {category: "古诗词", question: "两岸猿声啼不住，轻舟已过万重山。这首诗出自？", options: ["《早发白帝城》", "《静夜思》", "《春晓》", "《江雪》"], answer: 0},
        {category: "古诗词", question: "渭城朝雨浥轻尘，客舍青青柳色新。这首诗的作者是？", options: ["王维", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "劝君更尽一杯酒，西出阳关无故人。这句诗写的是？", options: ["送别", "重逢", "相遇", "离别"], answer: 0},
        {category: "古诗词", question: "渭城曲的别名是？", options: ["《阳关三叠》", "《折柳》", "《送别》", "《离歌》"], answer: 0},
        {category: "古诗词", question: "葡萄美酒夜光杯，欲饮琵琶马上催。这首诗的作者是？", options: ["王翰", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "醉卧沙场君莫笑，古来征战几人回。这首诗描写的是？", options: ["边塞军旅", "田园风光", "山水景色", "都市生活"], answer: 0},
        {category: "古诗词", question: "秦时明月汉时关，万里长征人未还。这首诗的作者是？", options: ["王昌龄", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "但使龙城飞将在，不教胡马度阴山。这首诗中的飞将指的是？", options: ["李广", "卫青", "霍去病", "岳飞"], answer: 0},
        {category: "古诗词", question: "黄沙百战穿金甲，不破楼兰终不还。这首诗的作者是？", options: ["王昌龄", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "青海长云暗雪山，孤城遥望玉门关。这首诗的作者是？", options: ["王昌龄", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "不破楼兰终不还表达了什么精神？", options: ["坚决战斗到底", "喜欢楼兰", "想回家", "想打仗"], answer: 0},
        {category: "古诗词", question: "寒雨连江夜入吴，平明送客楚山孤。这首诗的作者是？", options: ["王昌龄", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "洛阳亲友如相问，一片冰心在玉壶。这句诗表达了什么？", options: ["清廉高洁", "想念朋友", "天气冷", "喜欢冰"], answer: 0},
        {category: "古诗词", question: "烽火照西京，心中自不平。这首诗的作者是？", options: ["杨炯", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "宁为百夫长，胜作一书生。这句诗表达了什么？", options: ["从军报国", "读书重要", "喜欢打仗", "讨厌读书"], answer: 0},

        // 成语类（50题）
        {category: "成语", question: "画蛇添足的意思是？", options: ["画得很好", "做多余的事", "快速完成", "努力奋斗"], answer: 1},
        {category: "成语", question: "掩耳盗铃的意思是？", options: ["保护耳朵", "偷铃铛", "自己欺骗自己", "小心谨慎"], answer: 2},
        {category: "成语", question: "亡羊补牢的意思是？", options: ["羊丢了", "修羊圈", "出了问题及时补救", "放弃努力"], answer: 2},
        {category: "成语", question: "井底之蛙的意思是？", options: ["青蛙很可爱", "住在井里", "见识短浅", "游泳好"], answer: 2},
        {category: "成语", question: "刻舟求剑的意思是？", options: ["在船上刻字", "做剑", "固守旧法，不知变通", "勇敢"], answer: 2},
        {category: "成语", question: "守株待兔的故事告诉我们什么道理？", options: ["要种树", "要等待机会", "不能心存侥幸，要主动努力", "兔子会撞树"], answer: 2},
        {category: "成语", question: "对牛弹琴的意思是？", options: ["牛喜欢音乐", "对不懂的人说道理", "弹琴技术好", "牛很聪明"], answer: 1},
        {category: "成语", question: "杞人忧天的意思是？", options: ["关心天气", "担心天会塌下来", "热爱天空", "古代人聪明"], answer: 1},
        {category: "成语", question: "杯弓蛇影的故事告诉我们什么道理？", options: ["不要喝酒", "不要疑神疑鬼", "弓和蛇", "杯子里有蛇"], answer: 1},
        {category: "成语", question: "纸上谈兵的故事中，那个纸上谈兵的人是谁？", options: ["赵括", "白起", "廉颇", "赵奢"], answer: 0},
        {category: "成语", question: "滥竽充数的故事中，那个滥竽充数的人是谁？", options: ["南郭先生", "齐宣王", "齐湣王", "北郭先生"], answer: 0},
        {category: "成语", question: "狐假虎威的意思是？", options: ["狐狸很厉害", "老虎怕狐狸", "借着别人的威势吓唬人", "狐狸和老虎是朋友"], answer: 2},
        {category: "成语", question: "画龙点睛的意思是？", options: ["画龙很难", "在关键处加上一笔，使内容更生动", "画龙需要眼睛", "画好龙要很久"], answer: 1},
        {category: "成语", question: "望梅止渴的意思是？", options: ["喜欢吃梅子", "用空想安慰自己", "梅子能解渴", "看梅子流口水"], answer: 1},
        {category: "成语", question: "叶公好龙的意思是？", options: ["喜欢龙", "表面上喜欢，实际上不喜欢或害怕", "养龙", "画龙"], answer: 1},
        {category: "成语", question: "拔苗助长的意思是？", options: ["禾苗长高了", "急于求成，反而坏事", "帮助禾苗", "拔草"], answer: 1},
        {category: "成语", question: "自相矛盾的意思是？", options: ["自己打自己", "说话前后冲突", "矛盾很多", "吵架"], answer: 1},
        {category: "成语", question: "掩耳盗铃的盗是什么意思？", options: ["强盗", "偷", "盖", "藏"], answer: 1},
        {category: "成语", question: "亡羊补牢的亡是什么意思？", options: ["死亡", "逃跑", "丢失", "灭亡"], answer: 2},
        {category: "成语", question: "刻舟求剑的故事发生在哪条河上？", options: ["长江", "淮河", "黄河", "没具体说明"], answer: 3},
        {category: "成语", question: "守株待兔的株指的是什么？", options: ["树苗", "树桩", "树木", "树枝"], answer: 1},
        {category: "成语", question: "井底之蛙的井比喻什么？", options: ["环境", "见识狭窄", "家", "安全"], answer: 1},
        {category: "成语", question: "对牛弹琴的琴是什么乐器？", options: ["古琴", "钢琴", "小提琴", "吉他"], answer: 0},
        {category: "成语", question: "杞人忧天的杞是古代的什么国？", options: ["鲁国", "齐国", "楚国", "杞国"], answer: 3},
        {category: "成语", question: "杯弓蛇影中杯子里是什么？", options: ["蛇", "弓的倒影", "真的蛇", "虫子"], answer: 1},
        {category: "成语", question: "纸上谈兵的赵括是哪国人？", options: ["秦国", "赵国", "齐国", "楚国"], answer: 1},
        {category: "成语", question: "滥竽充数的竽是什么乐器？", options: ["笙", "箫", "竽", "笛子"], answer: 2},
        {category: "成语", question: "狐假虎威的假是什么意思？", options: ["假的", "借", "假装", "真假"], answer: 1},
        {category: "成语", question: "画龙点睛的睛指的是什么？", options: ["眼睛", "镜子", "精彩", "笔画"], answer: 0},
        {category: "成语", question: "望梅止渴的故事与谁有关？", options: ["曹操", "刘备", "孙权", "诸葛亮"], answer: 0},
        {category: "成语", question: "叶公好龙的故事中，叶公见到真龙后？", options: ["很高兴", "吓跑了", "和龙成为朋友", "画龙"], answer: 1},
        {category: "成语", question: "拔苗助长是种什么？", options: ["花", "草", "禾苗", "树"], answer: 2},
        {category: "成语", question: "自相矛盾的故事中，卖的是？", options: ["矛", "盾", "矛和盾", "剑"], answer: 2},
        {category: "成语", question: "画蛇添足的人最后？", options: ["赢了", "输了", "平局", "画完了"], answer: 1},
        {category: "成语", question: "刻舟求剑的人为什么找不到剑？", options: ["剑沉下去了", "船在动", "河太深", "剑坏了"], answer: 1},
        {category: "成语", question: "守株待兔的人最后？", options: ["天天有兔子", "再也没有兔子来", "种了很多树", "搬家了"], answer: 1},
        {category: "成语", question: "对牛弹琴说的是对谁弹琴？", options: ["牛", "不懂的人", "音乐家", "朋友"], answer: 1},
        {category: "成语", question: "杞人忧天的杞人最后？", options: ["天真的塌了", "天没塌，但一直担心", "搬走了", "开心了"], answer: 1},
        {category: "成语", question: "杯弓蛇影的人最后？", options: ["喝了蛇", "明白了真相", "生病了", "扔了杯子"], answer: 1},
        {category: "成语", question: "纸上谈兵的赵括最后？", options: ["打了胜仗", "打了败仗", "成了将军", "写书去了"], answer: 1},
        {category: "成语", question: "滥竽充数的南郭先生最后？", options: ["继续吹竽", "逃跑了", "学会了吹竽", "当了乐师"], answer: 1},
        {category: "成语", question: "狐假虎威的故事中，老虎为什么怕狐狸？", options: ["狐狸厉害", "怕后面的百兽", "狐狸聪明", "老虎胆小"], answer: 1},
        {category: "成语", question: "画龙点睛的龙后来？", options: ["飞走了", "被画完了", "活了", "走了"], answer: 2},
        {category: "成语", question: "望梅止渴的士兵最后？", options: ["吃到了梅子", "解渴了", "找到了水", "没喝到"], answer: 2},

        // 汉字/词语类（50题）
        {category: "汉字", question: "休字的造字法是？", options: ["象形", "指事", "会意", "形声"], answer: 2},
        {category: "汉字", question: "明字的造字法是？", options: ["象形", "指事", "会意", "形声"], answer: 2},
        {category: "汉字", question: "上字的造字法是？", options: ["象形", "指事", "会意", "形声"], answer: 1},
        {category: "汉字", question: "日字的造字法是？", options: ["象形", "指事", "会意", "形声"], answer: 0},
        {category: "汉字", question: "妈字的造字法是？", options: ["象形", "指事", "会意", "形声"], answer: 3},
        {category: "汉字", question: "形声字的形旁通常表示？", options: ["声音", "意思", "笔画", "结构"], answer: 1},
        {category: "汉字", question: "形声字的声旁通常表示？", options: ["声音", "意思", "笔画", "结构"], answer: 0},
        {category: "汉字", question: "汉字最早的成熟文字是？", options: ["甲骨文", "金文", "小篆", "楷书"], answer: 0},
        {category: "汉字", question: "甲骨文主要刻在什么上？", options: ["龟甲和兽骨", "青铜器", "竹简", "纸张"], answer: 0},
        {category: "汉字", question: "金文主要刻在什么上？", options: ["龟甲", "青铜器", "竹简", "石头"], answer: 1},
        {category: "汉字", question: "我国古代四大发明之一的造纸术是谁发明的？", options: ["蔡伦", "毕昇", "张衡", "祖冲之"], answer: 0},
        {category: "汉字", question: "活字印刷术是谁发明的？", options: ["蔡伦", "毕昇", "张衡", "祖冲之"], answer: 1},
        {category: "汉字", question: "小篆是谁统一文字时使用的？", options: ["秦始皇", "汉武帝", "唐太宗", "宋太祖"], answer: 0},
        {category: "汉字", question: "楷书也被称为？", options: ["真书", "草书", "行书", "隶书"], answer: 0},
        {category: "汉字", question: "行书的特点是？", options: ["工整", "介于楷书和草书之间", "潦草", "古老"], answer: 1},
        {category: "汉字", question: "草书的特点是？", options: ["工整", "容易辨认", "笔画相连，书写速度快", "结构复杂"], answer: 2},
        {category: "汉字", question: "汉字有多少个基本笔画？", options: ["5个", "10个", "20个", "30个"], answer: 0},
        {category: "汉字", question: "永字八法是指什么书的写法？", options: ["楷书", "行书", "草书", "隶书"], answer: 0},
        {category: "汉字", question: "汉字的一笔是？", options: ["点", "横", "竖", "撇"], answer: 1},
        {category: "汉字", question: "汉字的丨是？", options: ["点", "横", "竖", "撇"], answer: 2},
        {category: "汉字", question: "汉字的丿是？", options: ["点", "横", "竖", "撇"], answer: 3},
        {category: "汉字", question: "汉字的丶是？", options: ["点", "横", "竖", "撇"], answer: 0},
        {category: "汉字", question: "汉字的乀是？", options: ["点", "横", "竖", "捺"], answer: 3},
        {category: "汉字", question: "汉字的亅是？", options: ["横", "竖钩", "提", "弯钩"], answer: 1},
        {category: "汉字", question: "字典里查字的方法是？", options: ["按拼音查", "按部首查", "按笔画查", "以上都是"], answer: 3},
        {category: "汉字", question: "字典的部首表示什么？", options: ["字的读音", "字的意思分类", "字的笔画", "字的写法"], answer: 1},
        {category: "汉字", question: "笔顺规则是什么？", options: ["从左到右", "从上到下", "先横后竖", "以上都是"], answer: 3},
        {category: "汉字", question: "十字的笔顺是？", options: ["先竖后横", "先横后竖", "同时", "随便"], answer: 1},
        {category: "汉字", question: "大字的笔顺是？", options: ["先横后横下", "先横下后横", "同时", "随便"], answer: 0},
        {category: "汉字", question: "小字的笔顺是？", options: ["中间钩后两点", "先两点后钩", "同时", "随便"], answer: 0},
        {category: "汉字", question: "水的笔顺是？", options: ["先中间后两边", "先两边后中间", "同时", "随便"], answer: 1},
        {category: "汉字", question: "火字的笔顺是？", options: ["先点后两点人", "先两点人后点", "同时", "随便"], answer: 0},
        {category: "汉字", question: "汉字的间架结构有哪些？", options: ["左右结构", "上下结构", "独体字", "以上都是"], answer: 3},
        {category: "汉字", question: "明字的结构是？", options: ["左右结构", "上下结构", "独体字", "品字结构"], answer: 0},
        {category: "汉字", question: "思字的结构是？", options: ["左右结构", "上下结构", "独体字", "品字结构"], answer: 1},
        {category: "汉字", question: "品字的结构是？", options: ["左右结构", "上下结构", "独体字", "品字结构"], answer: 3},
        {category: "汉字", question: "森字的结构是？", options: ["左右结构", "上下结构", "品字结构", "独体字"], answer: 2},
        {category: "汉字", question: "汉字的偏旁和部首的关系是？", options: ["完全相同", "大部分偏旁就是部首", "完全不同", "没有关系"], answer: 1},
        {category: "汉字", question: "木字旁的字多与什么有关？", options: ["树木", "水", "火", "土"], answer: 0},
        {category: "汉字", question: "三点水旁的字多与什么有关？", options: ["树木", "水", "火", "土"], answer: 1},
        {category: "汉字", question: "火字旁的字多与什么有关？", options: ["树木", "水", "火", "土"], answer: 2},
        {category: "汉字", question: "提土旁的字多与什么有关？", options: ["树木", "水", "火", "土"], answer: 3},
        {category: "汉字", question: "我国现行简化字开始于哪一年？", options: ["1956年", "1949年", "1978年", "2000年"], answer: 0},
        {category: "汉字", question: "繁体字在台湾被称为什么？", options: ["繁体字", "正体字", "古字", "大字"], answer: 1},
        {category: "汉字", question: "日本、韩国使用的汉字叫什么？", options: ["汉字", "日韩汉字", "汉字文化", "汉字圈"], answer: 0},
        {category: "汉字", question: "拼音方案是谁制定的？", options: ["周有光", "鲁迅", "胡适", "陈独秀"], answer: 0},
        {category: "汉字", question: "汉语拼音采用什么字母？", options: ["汉字", "拉丁字母", "希腊字母", "俄文字母"], answer: 1},
        {category: "汉字", question: "拼音中的声调有几个？", options: ["3个", "4个", "5个", "6个"], answer: 2},
        {category: "汉字", question: "轻声是第几声？", options: ["第一声", "第二声", "第五声", "没有声调"], answer: 2},
        {category: "汉字", question: "多音字的意思是？", options: ["有很多音", "一个字有多个读音", "声音很大", "声音很小"], answer: 1},

        // 标点符号类（10题）
        {category: "标点", question: "句号表示什么？", options: ["疑问", "感叹", "陈述结束", "句子中断"], answer: 2},
        {category: "标点", question: "问号用在什么地方？", options: ["陈述句", "疑问句", "感叹句", "祈使句"], answer: 1},
        {category: "标点", question: "感叹号用在什么地方？", options: ["陈述句", "疑问句", "感叹句", "祈使句"], answer: 2},
        {category: "标点", question: "逗号表示什么？", options: ["句子结束", "句子停顿", "疑问", "感叹"], answer: 1},
        {category: "标点", question: "顿号用在什么地方？", options: ["句中并列词语间", "句子结束", "疑问", "感叹"], answer: 0},
        {category: "标点", question: "分号用在什么地方？", options: ["并列分句间", "疑问", "感叹", "句中停顿"], answer: 0},
        {category: "标点", question: "冒号一般用在什么地方？", options: ["引用话语前", "句子结束", "疑问", "感叹"], answer: 0},
        {category: "标点", question: "引号用来表示什么？", options: ["引用", "停顿", "疑问", "感叹"], answer: 0},
        {category: "标点", question: "破折号的作用是？", options: ["解释说明", "句中停顿", "疑问", "感叹"], answer: 0},
        {category: "标点", question: "省略号的作用是？", options: ["表示省略", "句中停顿", "疑问", "感叹"], answer: 0}
    ],
    medium: [
        // 古诗词类（100题）
        {category: "古诗词", question: "不识庐山真面目，只缘身在此山中。这首诗的作者是？", options: ["李白", "苏轼", "杜甫", "白居易"], answer: 1},
        {category: "古诗词", question: "山重水复疑无路，柳暗花明又一村。这句诗的作者是？", options: ["陆游", "辛弃疾", "苏轼", "李白"], answer: 0},
        {category: "古诗词", question: "接天莲叶无穷碧，映日荷花别样红。这句诗描写的是哪个季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 1},
        {category: "古诗词", question: "春风又绿江南岸，明月何时照我还。这句诗的作者是？", options: ["王安石", "苏轼", "李白", "杜甫"], answer: 0},
        {category: "古诗词", question: "不畏浮云遮望眼，自缘身在最高层。这首诗的作者是？", options: ["王安石", "苏轼", "陆游", "辛弃疾"], answer: 0},
        {category: "古诗词", question: "两岸猿声啼不住，轻舟已过万重山。这句诗出自哪首诗？", options: ["《早发白帝城》", "《望庐山瀑布》", "《静夜思》", "《赠汪伦》"], answer: 0},
        {category: "古诗词", question: "大漠孤烟直，长河落日圆。这句诗描写的是？", options: ["江南风光", "塞外边塞", "草原", "雪山"], answer: 1},
        {category: "古诗词", question: "天生我材必有用，千金散尽还复来。这句诗的作者是？", options: ["杜甫", "白居易", "李白", "苏轼"], answer: 2},
        {category: "古诗词", question: "春江潮水连海平，海上明月共潮生。这句诗的作者是？", options: ["张若虚", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "采菊东篱下，悠然见南山。这句诗出自哪首诗？", options: ["《饮酒·其五》", "《归园田居》", "《桃花源记》", "《望岳》"], answer: 0},
        {category: "古诗词", question: "人生自古谁无死，留取丹心照汗青。这句诗的作者是？", options: ["岳飞", "文天祥", "陆游", "辛弃疾"], answer: 1},
        {category: "古诗词", question: "会当凌绝顶，一览众山小。这句诗描写的是哪座山？", options: ["华山", "泰山", "黄山", "嵩山"], answer: 1},
        {category: "古诗词", question: "国破山河在，城春草木深。这首诗的作者是？", options: ["李白", "杜甫", "白居易", "王维"], answer: 1},
        {category: "古诗词", question: "感时花溅泪，恨别鸟惊心。这句诗出自哪首诗？", options: ["《春望》", "《春晓》", "《静夜思》", "《江雪》"], answer: 0},
        {category: "古诗词", question: "烽火连三月，家书抵万金。这句诗写的是哪个朝代？", options: ["唐朝", "宋朝", "明朝", "清朝"], answer: 0},
        {category: "古诗词", question: "白头搔更短，浑欲不胜簪。这句诗中的簪是什么？", options: ["发簪", "玉簪", "花簪", "金簪"], answer: 0},
        {category: "古诗词", question: "剑外忽传收蓟北，初闻涕泪满衣裳。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "却看妻子愁何在，漫卷诗书喜欲狂。这首诗出自哪首？", options: ["《闻官军收河南河北》", "《春望》", "《静夜思》", "《江雪》"], answer: 0},
        {category: "古诗词", question: "白日放歌须纵酒，青春作伴好还乡。这句诗表达了什么心情？", options: ["高兴", "悲伤", "思念", "忧愁"], answer: 0},
        {category: "古诗词", question: "即从巴峡穿巫峡，便下襄阳向洛阳。这句诗中的两个峡是？", options: ["巴峡、巫峡", "长江三峡", "瞿塘峡", "西陵峡"], answer: 0},
        {category: "古诗词", question: "好雨知时节，当春乃发生。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "野径云俱黑，江船火独明。这句诗描写的是什么时候？", options: ["夜晚", "清晨", "中午", "傍晚"], answer: 0},
        {category: "古诗词", question: "晓看红湿处，花重锦官城。这句诗中的锦官城是哪里？", options: ["成都", "南京", "苏州", "扬州"], answer: 0},
        {category: "古诗词", question: "两个黄鹂鸣翠柳，一行白鹭上青天。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "窗含西岭千秋雪，门泊东吴万里船。这句诗描写的是哪个季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "西岭的雪为什么能窗含？", options: ["西岭在杜甫家附近", "西岭很高", "窗户很大", "雪很大"], answer: 0},
        {category: "古诗词", question: "东吴的船为什么能门泊？", options: ["成都靠近长江", "船很小", "门很大", "河很宽"], answer: 0},
        {category: "古诗词", question: "随风潜入夜，润物细无声。这句诗描写的是什么雨？", options: ["春雨", "秋雨", "夏雨", "冬雨"], answer: 0},
        {category: "古诗词", question: "野径云俱黑，江船火独明。这句诗描写的是什么天气？", options: ["雨夜", "晴夜", "雪夜", "风夜"], answer: 0},
        {category: "古诗词", question: "晓看红湿处，花重锦官城。这句诗写的是什么时候的景象？", options: ["雨后早晨", "雨前傍晚", "雨天中午", "雨后傍晚"], answer: 0},
        {category: "古诗词", question: "春夜喜雨这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "国破山河在，城春草木深。这首诗写的是什么时期？", options: ["安史之乱", "黄巢起义", "靖康之难", "土木堡之变"], answer: 0},
        {category: "古诗词", question: "感时花溅泪，恨别鸟惊心。这句诗中的感时指的是？", options: ["感叹时局", "感叹时间", "感叹季节", "感叹天气"], answer: 0},
        {category: "古诗词", question: "烽火连三月，家书抵万金。这句诗写的是？", options: ["战乱", "丰收", "团聚", "和平"], answer: 0},
        {category: "古诗词", question: "白头搔更短，浑欲不胜簪。这句诗表达了作者的心情是？", options: ["忧愁", "高兴", "平静", "愤怒"], answer: 0},
        {category: "古诗词", question: "剑外忽传收蓟北，初闻涕泪满衣裳。这首诗写的是什么消息？", options: ["收复失地", "战败", "家人来信", "升职"], answer: 0},
        {category: "古诗词", question: "却看妻子愁何在，漫卷诗书喜欲狂。这句诗表达了什么心情？", options: ["狂喜", "忧愁", "平静", "愤怒"], answer: 0},
        {category: "古诗词", question: "白日放歌须纵酒，青春作伴好还乡。这句诗中的青春指的是？", options: ["春光", "青春", "青春年华", "春天"], answer: 2},
        {category: "古诗词", question: "即从巴峡穿巫峡，便下襄阳向洛阳。这句诗表现了作者的？", options: ["归乡心切", "喜欢旅行", "思念朋友", "写景"], answer: 0},
        {category: "古诗词", question: "锦城丝管日纷纷，半入江风半入云。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "此曲只应天上有，人间能得几回闻。这句诗赞美的是什么？", options: ["音乐", "诗歌", "舞蹈", "绘画"], answer: 0},
        {category: "古诗词", question: "花径不曾缘客扫，蓬门今始为君开。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "客至这首诗写的是什么？", options: ["招待客人", "送别客人", "思念客人", "拜访客人"], answer: 0},
        {category: "古诗词", question: "盘飧市远无兼味，樽酒家贫只旧醅。这句诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "肯与邻翁相对饮，隔篱呼取尽余杯。这句诗表现了什么？", options: ["邻里和睦", "孤独", "贫穷", "热闹"], answer: 0},
        {category: "古诗词", question: "黄四娘家花满蹊，千朵万朵压枝低。这首诗写的是什么季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "留连戏蝶时时舞，自在娇莺恰恰啼。这句诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "江畔独步寻花这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "黄师塔前江水东，春光懒困倚微风。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "桃花一簇开无主，可爱深红爱浅红。这句诗表达了什么？", options: ["喜爱桃花", "讨厌桃花", "无所谓", "悲伤"], answer: 0},
        {category: "古诗词", question: "不是爱花即欲死，只恐花尽老相催。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "繁枝容易纷纷落，嫩蕊商量细细开。这首诗写的是？", options: ["花", "草", "树", "叶"], answer: 0},
        {category: "古诗词", question: "江碧鸟逾白，山青花欲燃。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "今春看又过，何日是归年。这首诗写的是什么心情？", options: ["思乡", "高兴", "悲伤", "愤怒"], answer: 0},
        {category: "古诗词", question: "绝句这首诗写的是什么季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "迟日江山丽，春风花草香。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "泥融飞燕子，沙暖睡鸳鸯。这句诗描写的是什么？", options: ["春景", "夏景", "秋景", "冬景"], answer: 0},
        {category: "古诗词", question: "江碧鸟逾白中的碧是什么意思？", options: ["碧绿", "蓝色", "青色", "白色"], answer: 0},
        {category: "古诗词", question: "山青花欲燃中的燃是什么意思？", options: ["燃烧", "鲜艳", "盛开", "飘落"], answer: 1},
        {category: "古诗词", question: "两个黄鹂鸣翠柳中的两个黄鹂在做什么？", options: ["唱歌", "飞翔", "玩耍", "睡觉"], answer: 0},
        {category: "古诗词", question: "一行白鹭上青天中的一行是什么意思？", options: ["排成一行", "一个", "两只", "多只"], answer: 0},
        {category: "古诗词", question: "窗含西岭千秋雪中的千秋是什么意思？", options: ["千年的雪", "终年不化的雪", "很多雪", "白雪"], answer: 1},
        {category: "古诗词", question: "门泊东吴万里船中的万里是什么意思？", options: ["远", "多", "大", "长"], answer: 0},
        {category: "古诗词", question: "绝二首这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "细草微风岸，危樯独夜舟。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "星垂平野阔，月涌大江流。这句诗描写的是什么景象？", options: ["夜景", "日景", "晨景", "暮景"], answer: 0},
        {category: "古诗词", question: "名岂文章著，官应老病休。这句诗表达了什么？", options: ["自嘲", "自豪", "忧愁", "高兴"], answer: 0},
        {category: "古诗词", question: "飘飘何所似，天地一沙鸥。这句诗中的沙鸥比喻什么？", options: ["孤独的自己", "自由", "渺小", "飞翔"], answer: 0},
        {category: "古诗词", question: "旅夜书怀这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "岁暮阴阳催短景，天涯霜雪霁寒宵。这首诗写的是什么季节？", options: ["冬天", "春天", "夏天", "秋天"], answer: 0},
        {category: "古诗词", question: "五更鼓角声悲壮，三峡星河影动摇。这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "野哭千家闻战伐，夷歌数处起渔樵。这句诗写的是什么？", options: ["战乱", "和平", "丰收", "节日"], answer: 0},
        {category: "古诗词", question: "卧龙跃马终黄土，人事依依漫寂寥。这首诗表达了什么？", options: ["悲凉", "高兴", "自豪", "平静"], answer: 0},
        {category: "古诗词", question: "阁夜这首诗的作者是？", options: ["杜甫", "李白", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "昔人已乘黄鹤去，此地空余黄鹤楼。这首诗的作者是？", options: ["崔颢", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "黄鹤一去不复返，白云千载空悠悠。这句诗写的是什么？", options: ["怀念", "写景", "送别", "思乡"], answer: 0},
        {category: "古诗词", question: "晴川历历汉阳树，芳草萋萋鹦鹉洲。这句诗描写的是哪里的景象？", options: ["黄鹤楼", "岳阳楼", "滕王阁", "蓬莱阁"], answer: 0},
        {category: "古诗词", question: "日暮乡关何处是，烟波江上使人愁。这句诗表达了什么？", options: ["思乡", "思念朋友", "写景", "送别"], answer: 0},
        {category: "古诗词", question: "黄鹤楼这首诗的作者是？", options: ["崔颢", "李白", "杜甫", "王维"], answer: 0},
        {category: "古诗词", question: "昔人已乘黄鹤去中的昔人指的是？", options: ["仙人子安", "古代人", "朋友", "诗人自己"], answer: 0},
        {category: "古诗词", question: "黄鹤楼在哪里？", options: ["武汉", "南京", "长沙", "南昌"], answer: 0},
        {category: "古诗词", question: "鹦鹉洲在哪里？", options: ["武汉", "南京", "长沙", "南昌"], answer: 0},
        {category: "古诗词", question: "烟波江上使人愁中的使人愁是什么意思？", options: ["让人发愁", "使人高兴", "使人平静", "使人激动"], answer: 0},
        {category: "古诗词", question: "李白看到黄鹤楼这首诗后？", options: ["不敢题诗", "写了诗", "很生气", "很开心"], answer: 0},
        {category: "古诗词", question: "故人西辞黄鹤楼，烟花三月下扬州。这句诗的作者是？", options: ["李白", "杜甫", "王维", "白居易"], answer: 0},
        {category: "古诗词", question: "孤帆远影碧空尽，唯见长江天际流。这句诗写的是？", options: ["送别", "写景", "思乡", "思念朋友"], answer: 0},
        {category: "古诗词", question: "烟花三月中的烟花是什么意思？", options: ["繁花似锦", "烟花", "雾气", "柳絮"], answer: 0},
        {category: "古诗词", question: "送孟浩然之广陵这首诗的作者是？", options: ["李白", "杜甫", "王维", "白居易"], answer: 0},
        {category: "古诗词", question: "广陵是现在的什么地方？", options: ["扬州", "南京", "苏州", "杭州"], answer: 0},
        {category: "古诗词", question: "朝辞白帝彩云间，千里江陵一日还。这首诗的作者是？", options: ["李白", "杜甫", "王维", "白居易"], answer: 0},
        {category: "古诗词", question: "两岸猿声啼不住，轻舟已过万重山。这句诗写的是？", options: ["舟行速度", "猿声", "山景", "江景"], answer: 0},
        {category: "古诗词", question: "早发白帝城这首诗表达了什么心情？", options: ["愉快", "悲伤", "忧愁", "平静"], answer: 0},
        {category: "古诗词", question: "白帝城在哪里？", options: ["重庆", "湖北", "四川", "湖南"], answer: 0},
        {category: "古诗词", question: "江陵在哪里？", options: ["湖北", "重庆", "四川", "湖南"], answer: 0},
        {category: "古诗词", question: "彩云间是什么意思？", options: ["彩云之间", "白云", "乌云", "云彩"], answer: 0},
        {category: "古诗词", question: "千里江陵一日还表现了什么？", options: ["船快", "船慢", "路程远", "时间短"], answer: 0},
        {category: "古诗词", question: "轻舟已过万重山中的万重山指的是？", options: ["三峡", "很多山", "高山", "山脉"], answer: 0},
        {category: "古诗词", question: "蜀道难，难于上青天。这句诗的作者是？", options: ["李白", "杜甫", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "蜀道之难，难于上青天，使人听此凋朱颜。这句诗写的是？", options: ["蜀道险峻", "蜀道美丽", "蜀道平坦", "蜀道曲折"], answer: 0},
        {category: "古诗词", question: "连峰去天不盈尺，枯松倒挂倚绝壁。这句诗描写的是？", options: ["山峰", "松树", "道路", "悬崖"], answer: 0},
        {category: "古诗词", question: "飞湍瀑流争喧豗，砯崖转石万壑雷。这句诗写的是什么？", options: ["水声", "山声", "风声", "雷声"], answer: 0},
        {category: "古诗词", question: "蜀道难这首诗的作者是？", options: ["李白", "杜甫", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "蜀在哪里？", options: ["四川", "陕西", "贵州", "云南"], answer: 0},
        {category: "古诗词", question: "青泥何盘盘，百步九折萦岩峦。这句诗写的是什么？", options: ["山路", "水路", "空中", "地下"], answer: 0},
        {category: "古诗词", question: "问君西游何时还，畏途巉岩不可攀。这句诗表达的是什么？", options: ["感叹", "询问", "高兴", "悲伤"], answer: 0},
        {category: "古诗词", question: "锦城虽云乐，不如早还家。这句诗中的锦城是哪里？", options: ["成都", "锦州", "重庆", "绵阳"], answer: 0},
        {category: "古诗词", question: "蜀道难这首诗表达了什么？", options: ["对朋友的关切", "赞美蜀道", "思乡", "送别"], answer: 0},
        {category: "古诗词", question: "将进酒，君不见黄河之水天上来。这句诗的作者是？", options: ["李白", "杜甫", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "君不见高堂明镜悲白发，朝如青丝暮成雪。这句诗感叹的是什么？", options: ["时光易逝", "头发白", "镜子亮", "悲伤"], answer: 0},
        {category: "古诗词", question: "人生得意须尽欢，莫使金樽空对月。这句诗劝人？", options: ["及时行乐", "努力工作", "珍惜时间", "不要喝酒"], answer: 0},
        {category: "古诗词", question: "天生我材必有用，千金散尽还复来。这句诗表达了什么？", options: ["自信乐观", "自负", "浪费", "慷慨"], answer: 0},
        {category: "古诗词", question: "烹羊宰牛且为乐，会须一饮三百杯。这句诗中的三百杯是什么意思？", options: ["很多酒", "三百杯酒", "三种酒", "喝酒三次"], answer: 0},
        {category: "古诗词", question: "钟鼓馔玉不足贵，但愿长醉不复醒。这句诗表达了什么？", options: ["及时行乐", "追求财富", "喜欢喝酒", "讨厌钟鼓"], answer: 0},
        {category: "古诗词", question: "古来圣贤皆寂寞，惟有饮者留其名。这句诗表达了什么？", options: ["愤世嫉俗", "赞美饮酒", "感叹历史", "歌颂圣贤"], answer: 0},
        {category: "古诗词", question: "陈王昔时宴平乐，斗酒十千恣欢谑。这句诗中的陈王是谁？", options: ["曹植", "陈胜", "陈霸先", "陈阿娇"], answer: 0},
        {category: "古诗词", question: "主人何为言少钱，径须沽取对君酌。这句诗表达的是？", options: ["豪爽", "吝啬", "客气", "大方"], answer: 0},
        {category: "古诗词", question: "五花马，千金裘，呼儿将出换美酒。这句诗表现了什么？", options: ["豪放", "富有", "喜欢酒", "大方"], answer: 0},
        {category: "古诗词", question: "与尔同销万古愁。这句诗中的万古愁指的是？", options: ["无尽的忧愁", "古代忧愁", "忧愁万年", "大忧愁"], answer: 0},
        {category: "古诗词", question: "将进酒这首诗的作者是？", options: ["李白", "杜甫", "白居易", "王维"], answer: 0},
        {category: "古诗词", question: "君不见黄河之水天上来中的天上来是什么意思？", options: ["从高处流下", "从天上流下", "从西方流下", "从北方流下"], answer: 0},

        // 成语类（50题）
        {category: "成语", question: "守株待兔的故事告诉我们什么道理？", options: ["要种树", "要等待机会", "不能心存侥幸，要主动努力", "兔子会撞树"], answer: 2},
        {category: "成语", question: "对牛弹琴的意思是？", options: ["牛喜欢音乐", "对不懂的人说道理", "弹琴技术好", "牛很聪明"], answer: 1},
        {category: "成语", question: "杞人忧天的意思是？", options: ["关心天气", "担心天会塌下来", "热爱天空", "古代人聪明"], answer: 1},
        {category: "成语", question: "愚公移山的精神是什么？", options: ["坚持不懈", "愚笨", "搬山", "浪费"], answer: 0},
        {category: "成语", question: "精卫填海讲的是什么故事？", options: ["神话", "历史", "寓言", "传说"], answer: 0},
        {category: "成语", question: "夸父追日讲的是什么故事？", options: ["神话", "历史", "寓言", "传说"], answer: 0},
        {category: "成语", question: "卧薪尝胆的主人公是谁？", options: ["勾践", "夫差", "夫椒", "范蠡"], answer: 0},
        {category: "成语", question: "三顾茅庐讲的是谁的故事？", options: ["刘备", "曹操", "孙权", "诸葛亮"], answer: 0},
        {category: "成语", question: "负荆请罪的主人公是谁？", options: ["廉颇", "蔺相如", "赵王", "秦王"], answer: 0},
        {category: "成语", question: "完璧归赵讲的是谁的故事？", options: ["蔺相如", "廉颇", "赵王", "秦王"], answer: 0},
        {category: "成语", question: "指鹿为马的故事发生在哪个朝代？", options: ["秦朝", "汉朝", "唐朝", "宋朝"], answer: 0},
        {category: "成语", question: "指鹿为马的主人公是谁？", options: ["赵高", "秦二世", "李斯", "赵括"], answer: 0},
        {category: "成语", question: "毛遂自荐讲的是什么意思？", options: ["自我推荐", "骄傲", "勇敢", "聪明"], answer: 0},
        {category: "成语", question: "破釜沉舟的主人公是谁？", options: ["项羽", "刘邦", "韩信", "张良"], answer: 0},
        {category: "成语", question: "四面楚歌讲的是谁？", options: ["项羽", "刘邦", "韩信", "张良"], answer: 0},
        {category: "成语", question: "鸿门宴讲的是谁的故事？", options: ["刘邦和项羽", "刘备和曹操", "孙权和刘备", "诸葛亮和周瑜"], answer: 0},
        {category: "成语", question: "背水一战的主人公是谁？", options: ["韩信", "项羽", "刘邦", "张良"], answer: 0},
        {category: "成语", question: "多多益善的主人公是谁？", options: ["韩信", "项羽", "刘邦", "张良"], answer: 0},
        {category: "成语", question: "多多益善的反面是谁说的？", options: ["刘邦", "韩信", "项羽", "张良"], answer: 0},
        {category: "成语", question: "一饭千金的主人公是谁？", options: ["韩信", "项羽", "刘邦", "张良"], answer: 0},
        {category: "成语", question: "萧何月下追韩信讲的是谁的故事？", options: ["萧何和韩信", "萧何和刘邦", "韩信和刘邦", "刘邦和张良"], answer: 0},
        {category: "成语", question: "萧何追韩信的原因是？", options: ["人才难得", "刘邦命令", "韩信逃跑", "萧何喜欢"], answer: 0},
        {category: "成语", question: "成也萧何败也萧何的意思是？", options: ["事情好坏都因同一人", "萧何好坏", "成功失败", "历史故事"], answer: 0},
        {category: "成语", question: "项庄舞剑意在沛公中的沛公是谁？", options: ["刘邦", "项羽", "项庄", "项伯"], answer: 0},
        {category: "成语", question: "人为刀俎我为鱼肉的意思是？", options: ["任人宰割", "切菜做饭", "钓鱼", "打猎"], answer: 0},
        {category: "成语", question: "鸿门宴的结果是什么？", options: ["刘邦逃脱", "项羽失败", "刘邦胜利", "项羽胜利"], answer: 0},
        {category: "成语", question: "楚河汉界指的是什么？", options: ["象棋", "战争", "河流", "边界"], answer: 0},
        {category: "成语", question: "闻鸡起舞讲的是谁？", options: ["祖逖", "刘琨", "祖冲之", "刘禹锡"], answer: 0},
        {category: "成语", question: "闻鸡起舞的起舞是什么意思？", options: ["练武", "跳舞", "起床", "唱歌"], answer: 0},
        {category: "成语", question: "东施效颦讲的是什么故事？", options: ["模仿", "学习", "嫉妒", "友谊"], answer: 0},
        {category: "成语", question: "东施效颦中的东施是谁？", options: "丑女", "美女", "西施的朋友", "东施的邻居"], answer: 0},
        {category: "成语", question: "邯郸学步讲的是什么故事？", options: ["盲目模仿", "学习走路", "旅行", "拜访"], answer: 0},
        {category: "成语", question: "邯郸学步的结果是什么？", options: ["不会走路", "学会走路", "走路很好", "忘记自己"], answer: 0},
        {category: "成语", question: "盲人摸象讲的是什么道理？", options: ["片面看问题", "大象很大", "盲人可怜", "大象危险"], answer: 0},
        {category: "成语", question: "盲人摸象有几个人摸大象？", options: ["4个", "5个", "6个", "3个"], answer: 0},
        {category: "成语", question: "盲人摸象中摸到象牙的人说像？", options: ["萝卜", "扇子", "绳子", "柱子"], answer: 0},
        {category: "成语", question: "盲人摸象中摸到耳朵的人说像？", options: ["扇子", "萝卜", "绳子", "柱子"], answer: 0},
        {category: "成语", question: "盲人摸象中摸到腿的人说像？", options: ["柱子", "扇子", "萝卜", "绳子"], answer: 0},
        {category: "成语", question: "盲人摸象中摸到背的人说像？", options: ["墙", "柱子", "扇子", "萝卜"], answer: 0},
        {category: "成语", question: "盲人摸象中摸到尾巴的人说像？", options: ["绳子", "柱子", "扇子", "萝卜"], answer: 0},
        {category: "成语", question: "盲人摸象告诉我们看问题要？", options: ["全面", "片面", "仔细", "认真"], answer: 0},
        {category: "成语", question: "掩耳盗铃的人偷的是什么？", options: ["铃铛", "钟", "锣", "鼓"], answer: 0},
        {category: "成语", question: "掩耳盗铃的人为什么捂耳朵？", options: ["怕别人听到", "怕铃声响", "怕被发现", "怕铃声"], answer: 0},
        {category: "成语", question: "刻舟求剑的人为什么在船上刻记号？", options: ["标记剑的位置", "装饰船", "记录时间", "纪念"], answer: 0},
        {category: "成语", question: "刻舟求剑说明什么道理？", options: ["不知变通", "要刻记号", "船会动", "剑会沉"], answer: 0},
        {category: "成语", question: "画蛇添足的人为什么多画了脚？", options: ["想画更好", "不小心", "不知道", "喜欢"], answer: 0},
        {category: "成语", question: "画蛇添足的结果是什么？", options: ["输了", "赢了", "平局", "成功"], answer: 0},
        {category: "成语", question: "亡羊补牢的人为什么要修羊圈？", options: ["防止再丢羊", "养更多羊", "好看", "羊跑了"], answer: 0},
        {category: "成语", question: "亡羊补牢中的牢是什么意思？", options: ["羊圈", "监狱", "牢固", "牢房"], answer: 0},
        {category: "成语", question: "井底之蛙为什么看不到外面？", options: ["在井里", "井太深", "蛙太小", "水太深"], answer: 0},
        {category: "成语", question: "井底之蛙告诉我们什么？", options: ["要多学习", "要跳出井", "见识要广", "青蛙可爱"], answer: 2},
        {category: "成语", question: "杯弓蛇影中的人为什么害怕？", options: ["以为杯里有蛇", "杯子有毒", "弓在动", "灯光可怕"], answer: 0},
        {category: "成语", question: "杯弓蛇影说明什么道理？", options: ["不要多疑", "要小心", "蛇可怕", "弓可怕"], answer: 0},

        // 文学常识类（50题）
        {category: "常识", question: "四书指的是？", options: ["论语、孟子、大学、中庸", "诗经、尚书、礼记、周易", "论语、孟子、老子、庄子", "大学、中庸、论语、道德经"], answer: 0},
        {category: "常识", question: "五经指的是？", options: ["诗、书、礼、易、春秋", "论语、孟子、大学、中庸、孝经", "诗、书、礼、乐、易", "诗、书、礼、易、乐"], answer: 0},
        {category: "常识", question: "儒家学派的创始人是？", options: ["孔子", "孟子", "荀子", "韩非子"], answer: 0},
        {category: "常识", question: "道家学派的创始人是？", options: ["老子", "庄子", "列子", "鬼谷子"], answer: 0},
        {category: "常识", question: "孔子名丘，字是什么？", options: ["仲尼", "子渊", "子舆", "子长"], answer: 0},
        {category: "常识", question: "孟子名轲，字是什么？", options: ["子舆", "仲尼", "子渊", "子长"], answer: 0},
        {category: "常识", question: "庄子名周，字是什么？", options: ["子休", "仲尼", "子舆", "子渊"], answer: 0},
        {category: "常识", question: "《诗经》有多少篇？", options: ["305篇", "300篇", "310篇", "320篇"], answer: 0},
        {category: "常识", question: "《诗经》分为几个部分？", options: ["3个", "4个", "5个", "6个"], answer: 1},
        {category: "常识", question: "《诗经》的风指的是什么？", options: ["民歌", "宫廷音乐", "祭祀歌", "赞美诗"], answer: 0},
        {category: "常识", question: "《诗经》的雅指的是什么？", options: ["宫廷音乐", "民歌", "祭祀歌", "赞美诗"], answer: 0},
        {category: "常识", question: "《诗经》的颂指的是什么？", options: ["祭祀歌", "民歌", "宫廷音乐", "赞美诗"], answer: 0},
        {category: "常识", question: "《诗经》的赋指的是？", options: ["直抒胸臆", "比喻", "借景抒情", "直接描绘"], answer: 0},
        {category: "常识", question: "《诗经》的比指的是？", options: ["比喻", "直抒胸臆", "借景抒情", "直接描绘"], answer: 0},
        {category: "常识", question: "《诗经》的兴指的是？", options: ["借景抒情", "比喻", "直抒胸臆", "直接描绘"], answer: 0},
        {category: "常识", question: "楚辞的代表作是？", options: ["离骚", "九歌", "天问", "九章"], answer: 0},
        {category: "常识", question: "离骚的作者是谁？", options: ["屈原", "宋玉", "景差", "唐勒"], answer: 0},
        {category: "常识", question: "屈原是哪个国家的人？", options: ["楚国", "秦国", "赵国", "齐国"], answer: 0},
        {category: "常识", question: "端午节的来源与谁有关？", options: ["屈原", "伍子胥", "介子推", "曹娥"], answer: 0},
        {category: "常识", question: "《楚辞》中的楚指的是？", options: ["楚国", "楚地", "楚方言", "楚文化"], answer: 0},
        {category: "常识", question: "《九歌》有多少篇？", options: ["11篇", "9篇", "10篇", "12篇"], answer: 0},
        {category: "常识", question: "《天问》的主要内容是？", options: ["问天", "问地", "问人", "问事"], answer: 0},
        {category: "常识", question: "《九章》有多少篇？", options: ["9篇", "8篇", "10篇", "11篇"], answer: 0},
        {category: "常识", question: "汉赋的代表作家是？", options: ["司马相如", "屈原", "宋玉", "枚乘"], answer: 0},
        {category: "常识", question: "《子虚赋》的作者是谁？", options: ["司马相如", "枚乘", "扬雄", "班固"], answer: 0},
        {category: "常识", question: "《上林赋》的作者是谁？", options: ["司马相如", "枚乘", "扬雄", "班固"], answer: 0},
        {category: "常识", question: "乐府诗的特点是？", options: ["配乐演唱", "民间创作", "宫廷音乐", "宗教音乐"], answer: 0},
        {category: "常识", question: "《木兰诗》属于什么诗？", options: ["乐府诗", "古诗", "近体诗", "词"], answer: 0},
        {category: "常识", question: "《孔雀东南飞》属于什么诗？", options: ["乐府诗", "古诗", "近体诗", "词"], answer: 0},
        {category: "常识", question: "建安七子中文名最大的是？", options: ["曹植", "曹丕", "王粲", "刘桢"], answer: 0},
        {category: "常识", question: "建安七子中曹操的儿子有几个？", options: ["2个", "1个", "3个", "4个"], answer: 0},
        {category: "常识", question: "建安风骨指的是什么？", options: ["建安时期的文学风格", "人物性格", "建筑风格", "雕刻风格"], answer: 0},
        {category: "常识", question: "曹操是哪个朝代的人？", options: ["东汉末年", "西汉", "三国", "东晋"], answer: 0},
        {category: "常识", question: "曹操的诗集叫什么？", options: ["魏武帝集", "曹子建集", "曹丕集", "曹操集"], answer: 0},
        {category: "常识", question: "曹丕的诗集叫什么？", options: ["魏文帝集", "魏武帝集", "曹子建集", "曹操集"], answer: 0},
        {category: "常识", question: "曹植的字是？", options: ["子建", "子桓", "子渊", "子舆"], answer: 0},
        {category: "常识", question: "《洛神赋》的作者是谁？", options: ["曹植", "曹丕", "曹操", "王粲"], answer: 0},
        {category: "常识", question: "《七步诗》的作者是谁？", options: ["曹植", "曹丕", "曹操", "王粲"], answer: 0},
        {category: "常识", question: "《七步诗》写的是什么兄弟关系？", options: ["曹植和曹丕", "曹植和曹操", "曹丕和曹操", "曹氏兄弟"], answer: 0},
        {category: "常识", question: "《古诗十九首》的朝代是？", options: ["东汉", "西汉", "三国", "魏晋"], answer: 0},
        {category: "常识", question: "《古诗十九首》的特点是？", options: ["无名氏作品", "有名氏作品", "诗人很多", "主题多样"], answer: 0},
        {category: "常识", question: "魏晋南北朝诗歌的特点是？", options: ["五言诗兴起", "七言诗兴起", "词兴起", "曲兴起"], answer: 0},
        {category: "常识", question: "陶渊明是哪个朝代的诗人？", options: ["东晋", "西晋", "东晋末年", "南朝"], answer: 2},
        {category: "常识", question: "陶渊明的字是？", options: ["元亮", "渊明", "潜", "陶潜"], answer: 0},
        {category: "常识", question: "《桃花源记》的作者是谁？", options: ["陶渊明", "谢灵运", "颜延之", "鲍照"], answer: 0},
        {category: "常识", question: "《归去来兮辞》的作者是谁？", options: ["陶渊明", "谢灵运", "颜延之", "鲍照"], answer: 0},
        {category: "常识", question: "陶渊明被称为？", options: ["田园诗人", "山水诗人", "边塞诗人", "宫廷诗人"], answer: 0},
        {category: "常识", question: "谢灵运被称为？", options: ["山水诗人", "田园诗人", "边塞诗人", "宫廷诗人"], answer: 0},
        {category: "常识", question: "南朝诗歌的特点是？", options: ["华丽", "质朴", "豪放", "婉约"], answer: 0},
        {category: "常识", question: "北朝诗歌的特点是？", options: ["豪放", "华丽", "质朴", "婉约"], answer: 2},
        {category: "常识", question: "初唐四杰不包括？", options: ["杜甫", "王勃", "杨炯", "卢照邻"], answer: 0},
        {category: "常识", question: "初唐四杰中年龄最小的是？", options: ["王勃", "杨炯", "卢照邻", "骆宾王"], answer: 0},
        {category: "常识", question: "《滕王阁序》的作者是谁？", options: ["王勃", "杨炯", "卢照邻", "骆宾王"], answer: 0},
        {category: "常识", question: "落霞与孤鹜齐飞，秋水共长天一色出自哪里？", options: ["《滕王阁序》", "《岳阳楼记》", "《醉翁亭记》", "《小石潭记》"], answer: 0},
        {category: "常识", question: "王勃死的时候多大？", options: ["27岁", "20岁", "30岁", "35岁"], answer: 0},
        {category: "常识", question: "盛唐诗人不包括？", options: ["苏轼", "李白", "杜甫", "王维"], answer: 0}
    ],
    hard: [
        // 古诗词类（100题）
        {category: "古诗词", question: "君不见黄河之水天上来，奔流到海不复回。这句诗的作者是？", options: ["杜甫", "李白", "苏轼", "白居易"], answer: 1},
        {category: "古诗词", question: "先天下之忧而忧，后天下之乐而乐。这句出自哪篇文章？", options: ["《岳阳楼记》", "《醉翁亭记》", "《小石潭记》", "《桃花源记》"], answer: 0},
        {category: "古诗词", question: "无可奈何花落去，似曾相识燕归来。这句诗的作者是？", options: ["晏殊", "欧阳修", "苏轼", "辛弃疾"], answer: 0},
        {category: "古诗词", question: "落红不是无情物，化作春泥更护花。这句诗的作者是？", options: ["龚自珍", "林则徐", "魏源", "黄遵宪"], answer: 0},
        {category: "古诗词", question: "但愿人长久，千里共婵娟。这句诗中的婵娟指的是？", options: ["美女", "月亮", "花朵", "爱情"], answer: 1},
        {category: "古诗词", question: "昨夜西风凋碧树，独上高楼，望尽天涯路。这句词的作者是？", options: ["晏殊", "李清照", "苏轼", "辛弃疾"], answer: 0},
        {category: "古诗词", question: "众里寻他千百度，蓦然回首，那人却在灯火阑珊处。这句词的作者是？", options: ["辛弃疾", "苏轼", "李清照", "晏殊"], answer: 0},
        {category: "古诗词", question: "十年生死两茫茫，不思量，自难忘。这首词的作者是？", options: ["苏轼", "李清照", "辛弃疾", "柳永"], answer: 0},
        {category: "古诗词", question: "疏影横斜水清浅，暗香浮动月黄昏。这句诗描写的是什么花？", options: ["梅花", "菊花", "牡丹", "荷花"], answer: 0},
        {category: "古诗词", question: "春风得意马蹄疾，一日看尽长安花。这句诗的作者是？", options: ["孟郊", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "莫道不销魂，帘卷西风，人比黄花瘦。这句词的作者是？", options: ["李清照", "苏轼", "辛弃疾", "晏殊"], answer: 0},
        {category: "古诗词", question: "枯藤老树昏鸦，小桥流水人家。这首散曲的作者是？", options: ["马致远", "关汉卿", "王实甫", "白朴"], answer: 0},
        {category: "古诗词", question: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。这句词的作者是？", options: ["李清照", "苏轼", "辛弃疾", "晏殊"], answer: 0},
        {category: "古诗词", question: "大江东去，浪淘尽，千古风流人物。这句词的作者是？", options: ["苏轼", "辛弃疾", "李清照", "柳永"], answer: 0},
        {category: "古诗词", question: "人生如梦，一尊还酹江月。这句词出自哪里？", options: ["《念奴娇·赤壁怀古》", "《水调歌头》", "《声声慢》", "《永遇乐》"], answer: 0},
        {category: "古诗词", question: "江山如画，一时多少豪杰。这句词的作者是？", options: ["苏轼", "辛弃疾", "李清照", "柳永"], answer: 0},
        {category: "古诗词", question: "乱石穿空，惊涛拍岸，卷起千堆雪。这句词描写的是？", options: ["赤壁", "长江", "黄河", "大海"], answer: 0},
        {category: "古诗词", question: "遥想公瑾当年，小乔初嫁了，雄姿英发。这句词中的公瑾是谁？", options: ["周瑜", "诸葛亮", "刘备", "孙权"], answer: 0},
        {category: "古诗词", question: "羽扇纶巾，谈笑间，樯橹灰飞烟灭。这句词中的羽扇纶巾指的是谁？", options: ["周瑜", "诸葛亮", "刘备", "孙权"], answer: 0},
        {category: "古诗词", question: "多情应笑我，早生华发。这句词表达了什么？", options: ["自嘲", "自豪", "忧愁", "高兴"], answer: 0},
        {category: "古诗词", question: "念奴娇是什么词牌名？", options: ["词牌", "题目", "作者", "朝代"], answer: 0},
        {category: "古诗词", question: "赤壁怀古是苏轼的什么作品？", options: ["词", "诗", "赋", "曲"], answer: 0},
        {category: "古诗词", question: "明月几时有？把酒问青天。这句词的作者是？", options: ["苏轼", "辛弃疾", "李清照", "柳永"], answer: 0},
        {category: "古诗词", question: "不知天上宫阙，今夕是何年。这句词中的宫阙指的是？", options: ["月宫", "天宫", "宫殿", "神仙住处"], answer: 0},
        {category: "古诗词", question: "我欲乘风归去，又恐琼楼玉宇，高处不胜寒。这句词表达了什么？", options: ["矛盾心理", "想上天", "怕冷", "喜欢高处"], answer: 0},
        {category: "古诗词", question: "起舞弄清影，何似在人间。这句词中的起舞弄清影指的是？", options: ["月下舞蹈", "舞蹈", "影子跳舞", "跳舞的人"], answer: 0},
        {category: "古诗词", question: "转朱阁，低绮户，照无眠。这句词中的朱阁绮户指的是？", options: ["楼阁门窗", "红门", "窗户", "门"], answer: 0},
        {category: "古诗词", question: "不应有恨，何事长向别时圆。这句词中的恨指的是？", options: ["遗憾", "仇恨", "愤怒", "悲伤"], answer: 0},
        {category: "古诗词", question: "人有悲欢离合，月有阴晴圆缺，此事古难全。这句词表达了什么？", options: ["人生无常", "月有圆缺", "悲欢离合", "阴晴变化"], answer: 0},
        {category: "古诗词", question: "但愿人长久，千里共婵娟。这句词出自哪里？", options: ["《水调歌头》", "《念奴娇》", "《声声慢》", "《永遇乐》"], answer: 0},
        {category: "古诗词", question: "水调歌头是什么？", options: ["词牌名", "题目", "作者", "朝代"], answer: 0},
        {category: "古诗词", question: "醉里挑灯看剑，梦回吹角连营。这首词的作者是？", options: ["辛弃疾", "苏轼", "李清照", "柳永"], answer: 0},
        {category: "古诗词", question: "八百里分麾下炙，五十弦翻塞外声。这首词中的八百里指的是？", options: ["牛", "距离", "军队", "食物"], answer: 0},
        {category: "古诗词", question: "沙场秋点兵。这首词出自哪里？", options: ["《破阵子》", "《念奴娇》", "《水调歌头》", "《声声慢》"], answer: 0},
        {category: "古诗词", question: "马作的卢飞快，弓如霹雳弦惊。这首词中的作的卢是什么意思？", options: ["如的卢马", "很快", "马的品种", "马的叫声"], answer: 0},
        {category: "古诗词", question: "了却君王天下事，赢得生前身后名。这首词表达了什么？", options: ["报国心愿", "追求名利", "喜欢战争", "想当将军"], answer: 0},
        {category: "古诗词", question: "可怜白发生。这首词出自哪里？", options: ["《破阵子》", "《念奴娇》", "《水调歌头》", "《声声慢》"], answer: 0},
        {category: "古诗词", question: "破阵子是什么？", options: ["词牌名", "题目", "作者", "朝代"], answer: 0},
        {category: "古诗词", question: "靖康耻，犹未雪。臣子恨，何时灭。这首词的作者是？", options: ["岳飞", "文天祥", "陆游", "辛弃疾"], answer: 0},
        {category: "古诗词", question: "驾长车，踏破贺兰山缺。这首词中的贺兰山指的是？", options: ["贺兰山", "山脉", "边疆", "山峰"], answer: 0},
        {category: "古诗词", question: "壮志饥餐胡虏肉，笑谈渴饮匈奴血。这首词表达了什么？", options: ["抗敌决心", "想吃饭", "想喝水", "喜欢胡虏"], answer: 0},
        {category: "古诗词", question: "待从头、收拾旧山河，朝天阙。这首词出自哪里？", options: ["《满江红》", "《破阵子》", "《念奴娇》", "《水调歌头》"], answer: 0},
        {category: "古诗词", question: "满江红是什么？", options: ["词牌名", "题目", "作者", "朝代"], answer: 0},
        {category: "古诗词", question: "三十功名尘与土，八千里路云和月。这首词的作者是？", options: ["岳飞", "文天祥", "陆游", "辛弃疾"], answer: 0},
        {category: "古诗词", question: "莫等闲，白了少年头，空悲切。这首词出自哪里？", options: ["《满江红》", "《破阵子》", "《念奴娇》", "《水调歌头》"], answer: 0},
        {category: "古诗词", question: "人生自古谁无死，留取丹心照汗青。这句诗的作者是？", options: ["文天祥", "岳飞", "陆游", "辛弃疾"], answer: 0},
        {category: "古诗词", question: "辛苦遭逢起一经，干戈寥落四周星。这句诗写的是什么时期？", options: ["抗元战争", "抗金战争", "太平时期", "战乱时期"], answer: 0},
        {category: "古诗词", question: "山河破碎风飘絮，身世浮沉雨打萍。这句诗出自哪里？", options: ["《过零丁洋》", "《正气歌》", "《金陵驿》", "《南安军》"], answer: 0},
        {category: "古诗词", question: "惶恐滩头说惶恐，零丁洋里叹零丁。这句诗表达了什么？", options: ["忧国忧民", "害怕", "叹息", "悲伤"], answer: 0},
        {category: "古诗词", question: "过零丁洋这首诗的作者是？", options: ["文天祥", "岳飞", "陆游", "辛弃疾"], answer: 0},
        {category: "古诗词", question: "过零丁洋这首诗写的是什么朝代？", options: ["南宋", "北宋", "金朝", "元朝"], answer: 0},
        {category: "古诗词", question: "人生自古谁无死，留取丹心照汗青。这句诗中的汗青指的是？", options: ["史册", "汗水", "青史", "历史"], answer: 2},
        {category: "古诗词", question: "辛苦遭逢起一经中的起一经指的是？", options: ["科举考试", "一本书", "一次经历", "第一次"], answer: 0},
        {category: "古诗词", question: "山河破碎风飘絮，身世浮沉雨打萍。这句诗用的是什么手法？", options: ["比喻", "夸张", "拟人", "排比"], answer: 0},
        {category: "古诗词", question: "惶恐滩头说惶恐中的惶恐滩在哪里？", options: ["广东", "福建", "江西", "湖南"], answer: 0},
        {category: "古诗词", question: "零丁洋里叹零丁中的零丁洋在哪里？", options: ["广东", "福建", "江西", "湖南"], answer: 0},
        {category: "古诗词", question: "文天祥的这首诗写的是什么心情？", options: ["宁死不屈", "害怕死亡", "想投降", "悲观"], answer: 0},
        {category: "古诗词", question: "夜阑卧听风吹雨，铁马冰河入梦来。这首诗的作者是？", options: ["陆游", "辛弃疾", "文天祥", "岳飞"], answer: 0},
        {category: "古诗词", question: "僵卧孤村不自哀，尚思为国戍轮台。这首诗表达了什么？", options: ["爱国", "忧愁", "思念", "悲伤"], answer: 0},
        {category: "古诗词", question: "十一月四日风雨大作出自哪里？", options: ["陆游诗集", "辛弃疾诗集", "文天祥诗集", "岳飞诗集"], answer: 0},
        {category: "古诗词", question: "铁马冰河入梦来指的是什么？", options: ["梦见战场", "梦见马", "梦见冰", "梦见河"], answer: 0},
        {category: "古诗词", question: "楼船夜雪瓜洲渡，铁马秋风大散关。这首诗的作者是？", options: ["陆游", "辛弃疾", "文天祥", "岳飞"], answer: 0},
        {category: "古诗词", question: "出师一表真名世，千载谁堪伯仲间。这首诗的作者是？", options: ["陆游", "辛弃疾", "文天祥", "岳飞"], answer: 0},
        {category: "古诗词", question: "书愤这首诗写的是什么？", options: ["对朝廷的失望", "对战争的厌恶", "对故乡的思念", "对朋友的怀念"], answer: 0},
        {category: "古诗词", question: "出师一表真名世中的出师一表指的是？", options: ["《出师表》", "一个表", "一出戏", "一次出征"], answer: 0},
        {category: "古诗词", question: "千载谁堪伯仲间中的伯仲是什么意思？", options: ["兄弟", "差不多", "第一", "最后"], answer: 1},
        {category: "古诗词", question: "山重水复疑无路，柳暗花明又一村。这句诗出自哪里？", options: ["《游山西村》", "《游山西村》", "《游山西村》", "《游山西村》"], answer: 0},
        {category: "古诗词", question: "山重水复疑无路表达了什么？", options: ["困境中的迷茫", "景色美丽", "心情愉快", "道路曲折"], answer: 0},
        {category: "古诗词", question: "柳暗花明又一村表达了什么？", options: ["绝处逢生的喜悦", "景色美丽", "心情愉快", "道路曲折"], answer: 0},
        {category: "古诗词", question: "游山西村这首诗的作者是？", options: ["陆游", "辛弃疾", "文天祥", "岳飞"], answer: 0},
        {category: "古诗词", question: "小楼一夜听春雨，深巷明朝卖杏花。这句诗出自哪里？", options: ["《临安春雨初霁》", "《游山西村》", "《书愤》", "《十一月四日风雨大作》"], answer: 0},
        {category: "古诗词", question: "小楼一夜听春雨，深巷明朝卖杏花。这句诗写的是哪个季节？", options: ["春天", "夏天", "秋天", "冬天"], answer: 0},
        {category: "古诗词", question: "世味年来薄似纱，谁令骑马客京华。这首诗的作者是？", options: ["陆游", "辛弃疾", "文天祥", "岳飞"], answer: 0},
        {category: "古诗词", question: "世味年来薄似纱表达了什么？", options: ["对世态炎凉的感叹", "喜欢薄纱", "生活贫困", "不想住京城"], answer: 0},
        {category: "古诗词", question: "小楼一夜听春雨，深巷明朝卖杏花。这句诗出自哪里？", options: ["《临安春雨初霁》", "《游山西村》", "《书愤》", "《十一月四日风雨大作》"], answer: 0},
        {category: "古诗词", question: "临安春雨初霁的作者是？", options: ["陆游", "辛弃疾", "文天祥", "岳飞"], answer: 0},
        {category: "古诗词", question: "临安是现在的什么地方？", options: ["杭州", "南京", "苏州", "扬州"], answer: 0},
        {category: "古诗词", question: "纸上得来终觉浅，绝知此事要躬行。这句诗的作者是？", options: ["陆游", "辛弃疾", "文天祥", "岳飞"], answer: 0},
        {category: "古诗词", question: "纸上得来终觉浅，绝知此事要躬行。这句诗出自哪里？", options: ["《冬夜读书示子聿》", "《游山西村》", "《书愤》", "《十一月四日风雨大作》"], answer: 0},
        {category: "古诗词", question: "纸上得来终觉浅告诉我们什么道理？", options: ["实践出真知", "读书很重要", "做笔记", "写文章"], answer: 0},
        {category: "古诗词", question: "绝知此事要躬行中的躬行是什么意思？", options: ["亲自实践", "躬身行走", "做运动", "旅行"], answer: 0},
        {category: "古诗词", question: "冬夜读书示子聿的作者是？", options: ["陆游", "辛弃疾", "文天祥", "岳飞"], answer: 0},
        {category: "古诗词", question: "示子聿中的子聿是谁？", options: ["陆游的儿子", "陆游的朋友", "陆游的学生", "陆游的老师"], answer: 0},
        {category: "古诗词", question: "王师北定中原日，家祭无忘告乃翁。这句诗的作者是？", options: ["陆游", "辛弃疾", "文天祥", "岳飞"], answer: 0},
        {category: "古诗词", question: "示儿这首诗写的是什么？", options: ["临终遗嘱", "教育孩子", "怀念祖先", "盼望统一"], answer: 0},
        {category: "古诗词", question: "死去元知万事空，但悲不见九州同。这句诗表达了什么？", options: ["爱国之情", "悲观", "无奈", "愤怒"], answer: 0},
        {category: "古诗词", question: "九州同指的是什么？", options: ["国家统一", "九州相同", "天下大同", "人民同心"], answer: 0},
        {category: "古诗词", question: "陆游的这首诗写的是什么时期？", options: ["南宋", "北宋", "金朝", "元朝"], answer: 0},
        {category: "古诗词", question: "示儿这首诗是陆游的什么？", options: ["绝笔诗", "代表作", "早年作品", "中期作品"], answer: 0},
        {category: "古诗词", question: "东篱把酒黄昏后，有暗香盈袖。这句词的作者是？", options: ["李清照", "苏轼", "辛弃疾", "晏殊"], answer: 0},
        {category: "古诗词", question: "莫道不销魂，帘卷西风，人比黄花瘦。这句词出自哪里？", options: ["《醉花阴》", "《一剪梅》", "《声声慢》", "《如梦令》"], answer: 0},
        {category: "古诗词", question: "醉花阴是什么？", options: ["词牌名", "题目", "作者", "朝代"], answer: 0},
        {category: "古诗词", question: "帘卷西风，人比黄花瘦。这句词中的黄花指的是？", options: ["菊花", "黄花", "花", "黄色的花"], answer: 0},
        {category: "古诗词", question: "人比黄花瘦表达了什么？", options: ["思念之苦", "人很瘦", "花很大", "风很大"], answer: 0},
        {category: "古诗词", question: "红藕香残玉簟秋。轻解罗裳，独上兰舟。这句词的作者是？", options: ["李清照", "苏轼", "辛弃疾", "晏殊"], answer: 0},
        {category: "古诗词", question: "云中谁寄锦书来，雁字回时，月满西楼。这句词出自哪里？", options: ["《一剪梅》", "《醉花阴》", "《声声慢》", "《如梦令》"], answer: 0},
        {category: "古诗词", question: "一剪梅是什么？", options: ["词牌名", "题目", "作者", "朝代"], answer: 0},
        {category: "古诗词", question: "云中谁寄锦书来中的锦书指的是？", options: ["书信", "锦缎", "锦缎书", "漂亮的字"], answer: 0},
        {category: "古诗词", question: "雁字回时中的雁字指的是？", options: ["雁阵", "雁的字", "书信", "雁飞"], answer: 0},
        {category: "古诗词", question: "花自飘零水自流。一种相思，两处闲愁。这句词出自哪里？", options: ["《一剪梅》", "《醉花阴》", "《声声慢》", "《如梦令》"], answer: 0},
        {category: "古诗词", question: "此情无计可消除，才下眉头，却上心头。这句词表达了什么？", options: ["相思之苦", "生病", "生气", "高兴"], answer: 0},
        {category: "古诗词", question: "才下眉头，却上心头中的眉头和心头指的是？", options: ["面部和心里", "烦恼所在", "思考和感觉", "表达方式"], answer: 1},
        {category: "古诗词", question: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。这句词出自哪里？", options: ["《声声慢》", "《一剪梅》", "《醉花阴》", "《如梦令》"], answer: 0},
        {category: "古诗词", question: "声声慢是什么？", options: ["词牌名", "题目", "作者", "朝代"], answer: 0},
        {category: "古诗词", question: "三杯两盏淡酒，怎敌他、晚来风急？这句词表达了什么？", options: ["孤独愁苦", "酒不够喝", "风很大", "天气冷"], answer: 0},
        {category: "古诗词", question: "雁过也，正伤心，却是旧时相识。这句词中的雁过也指的是？", options: ["秋天来了", "大雁飞过", "大雁走了", "写信"], answer: 0},
        {category: "古诗词", question: "满地黄花堆积。憔悴损，如今有谁堪摘？这句词描写的是什么季节？", options: ["秋天", "春天", "夏天", "冬天"], answer: 0},
        {category: "古诗词", question: "梧桐更兼细雨，到黄昏、点点滴滴。这句词中的梧桐象征什么？", options: ["凄凉", "高大", "秋天", "下雨"], answer: 0},
        {category: "古诗词", question: "这次第，怎一个愁字了得。这句词表达了什么？", options: ["极度的愁苦", "写不出字", "不知道愁字", "不识字"], answer: 0},
        {category: "古诗词", question: "怎一个愁字了得中的这次第是什么意思？", options: ["这种情况", "这一次", "所有情况", "第一次"], answer: 0},
        {category: "古诗词", question: "常记溪亭日暮，沉醉不知归路。这句词出自哪里？", options: ["《如梦令》", "《声声慢》", "《一剪梅》", "《醉花阴》"], answer: 0},
        {category: "古诗词", question: "如梦令是什么？", options: ["词牌名", "题目", "作者", "朝代"], answer: 0},
        {category: "古诗词", question: "兴尽晚回舟，误入藕花深处。这句词中的藕花深处指的是？", options: ["荷花丛中", "水深处", "花深处", "湖深处"], answer: 0},
        {category: "古诗词", question: "争渡，争渡，惊起一滩鸥鹭。这句词描写的是什么景象？", options: ["惊鸟起飞", "划船", "荷花", "水鸟"], answer: 0},
        {category: "古诗词", question: "昨夜雨疏风骤，浓睡不消残酒。这句词出自哪里？", options: ["《如梦令》", "《声声慢》", "《一剪梅》", "《醉花阴》"], answer: 0},
        {category: "古诗词", question: "试问卷帘人，却道海棠依旧。这句词表达了什么？", options: ["惜花之情", "问人", "喝酒", "醒来"], answer: 0},
        {category: "古诗词", question: "知否，知否？应是绿肥红瘦。这句词中的绿肥红瘦指的是？", options: ["叶茂花残", "绿色肥红色瘦", "草木茂盛", "花红叶绿"], answer: 0},
        {category: "古诗词", question: "应是绿肥红瘦中的绿指的是？", options: ["叶子", "绿色", "草", "树"], answer: 0},
        {category: "古诗词", question: "应是绿肥红瘦中的红指的是？", options: ["花朵", "红色", "果实", "花"], answer: 0},
        {category: "古诗词", question: "绿肥红瘦写的是什么季节？", options: ["暮春", "早春", "夏天", "秋天"], answer: 0},
        {category: "古诗词", question: "薄雾浓云愁永昼，瑞脑销金兽。这句词的作者是？", options: ["李清照", "苏轼", "辛弃疾", "晏殊"], answer: 0},
        {category: "古诗词", question: "佳节又重阳，玉枕纱橱，半夜凉初透。这句词写的是什么节日？", options: ["重阳节", "中秋节", "端午节", "春节"], answer: 0},
        {category: "古诗词", question: "东篱把酒黄昏后中的东篱典故出自？", options: ["陶渊明", "李白", "杜甫", "白居易"], answer: 0},
        {category: "古诗词", question: "帘卷西风，人比黄花瘦这句词中的黄花是什么花？", options: ["菊花", "黄花", "野花", "黄色的花"], answer: 0},
        {category: "古诗词", question: "莫道不销魂中的销魂是什么意思？", options: ["极度的悲伤", "死了", "消失", "陶醉"], answer: 0},
        {category: "古诗词", question: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。这句词中的叠词有什么作用？", options: ["增强语气", "描写声音", "表示重复", "强调时间"], answer: 0},
        {category: "古诗词", question: "到黄昏、点点滴滴。这句词中的点点滴滴描写的是什么？", options: ["雨声", "时间", "心情", "思考"], answer: 0},
        {category: "古诗词", question: "怎一个愁字了得中的了得是什么意思？", options: ["说得尽", "得到", "知道", "明白"], answer: 0},
        {category: "古诗词", question: "争渡，争渡，惊起一滩鸥鹭。这句词用了什么修辞手法？", options: ["反复", "夸张", "比喻", "拟人"], answer: 0},
        {category: "古诗词", question: "误入藕花深处中的藕花指的是什么花？", options: ["荷花", "莲藕", "野花", "水花"], answer: 0},
        {category: "古诗词", question: "应是绿肥红瘦中的肥和瘦是什么意思？", options: ["茂盛和凋残", "肥胖和瘦小", "好坏", "大小"], answer: 0},
        {category: "古诗词", question: "薄雾浓云愁永昼。瑞脑销金兽。这句词出自哪里？", options: ["《醉花阴》", "《声声慢》", "《一剪梅》", "《如梦令》"], answer: 0},
        {category: "古诗词", question: "瑞脑销金兽中的瑞脑是什么？", options: ["香料", "脑", "瑞气", "黄金"], answer: 0},
        {category: "古诗词", question: "瑞脑销金兽中的金兽是什么？", options: ["兽形香炉", "金做的兽", "兽头", "兽尾"], answer: 0},

        // 成语类（50题）
        {category: "成语", question: "纸上谈兵的故事中，那个纸上谈兵的人是谁？", options: ["赵括", "白起", "廉颇", "赵奢"], answer: 0},
        {category: "成语", question: "滥竽充数的故事中，那个滥竽充数的人是谁？", options: ["南郭先生", "齐宣王", "齐湣王", "北郭先生"], answer: 0},
        {category: "成语", question: "杯弓蛇影的故事告诉我们什么道理？", options: ["不要喝酒", "不要疑神疑鬼", "弓和蛇", "杯子里有蛇"], answer: 1},
        {category: "成语", question: "南郭先生为什么能滥竽充数？", options: ["齐宣王喜欢合奏", "南郭先生会吹", "别人不知道", "齐宣王不检查"], answer: 0},
        {category: "成语", question: "南郭先生后来为什么逃跑了？", options: ["齐湣王喜欢独奏", "被人发现", "不想吹了", "工资太低"], answer: 0},
        {category: "成语", question: "赵括的父亲是谁？", options: ["赵奢", "白起", "廉颇", "赵王"], answer: 0},
        {category: "成语", question: "赵括的父亲是做什么的？", options: ["将军", "文官", "商人", "农夫"], answer: 0},
        {category: "成语", question: "赵括为什么会纸上谈兵？", options: ["没有实战经验", "聪明绝顶", "骄傲自大", "运气不好"], answer: 0},
        {category: "成语", question: "长平之战是谁指挥的？", options: ["赵括", "白起", "廉颇", "赵奢"], answer: 1},
        {category: "成语", question: "长平之战的结果是？", options: ["赵国大败", "秦赵平局", "赵国胜利", "秦军撤退"], answer: 0},
        {category: "成语", question: "长平之战死了多少赵军？", options: ["四十万", "十万", "二十万", "五万"], answer: 0},
        {category: "成语", question: "赵括最后死了吗？", options: ["死了", "活着", "逃跑了", "投降了"], answer: 0},
        {category: "成语", question: "赵括是怎么死的？", options: ["战死", "自杀", "被杀", "病死"], answer: 0},
        {category: "成语", question: "白起是哪个国家的将军？", options: ["秦国", "赵国", "楚国", "齐国"], answer: 0},
        {category: "成语", question: "白起被称为？", options: ["杀神", "战神", "军神", "神将"], answer: 0},
        {category: "成语", question: "杯弓蛇影的故事发生在谁家？", options: ["乐广", "乐广的朋友", "乐广的邻居", "乐广的兄弟"], answer: 0},
        {category: "成语", question: "杯弓蛇影中的杯是什么做的？", options: ["漆杯", "金杯", "银杯", "玉杯"], answer: 0},
        {category: "成语", question: "杯弓蛇影中的弓挂在哪？", options: ["墙上", "杯子上", "天花板上", "柱子上"], answer: 0},
        {category: "成语", question: "乐广的朋友为什么会生病？", options: ["以为自己喝了蛇", "真的喝了蛇", "生病了", "中毒了"], answer: 0},
        {category: "成语", question: "乐广是怎么让朋友明白真相的？", options: ["请朋友来喝酒", "直接告诉他", "请医生", "用魔法"], answer: 0},
        {category: "成语", question: "乐广的朋友明白了之后？", options: ["病好了", "还是病", "生气了", "离开了"], answer: 0},
        {category: "成语", question: "滥竽充数中的竽是什么乐器？", options: ["管乐器", "弦乐器", "打击乐器", "吹奏乐器"], answer: 0},
        {category: "成语", question: "齐宣王喜欢多少人一起吹竽？", options: ["三百人", "一百人", "二百人", "四百人"], answer: 0},
        {category: "成语", question: "齐湣王喜欢怎么吹竽？", options: ["一人一人吹", "一起吹", "分批吹", "轮流吹"], answer: 0},
        {category: "成语", question: "南郭先生为什么不会吹竽？", options: ["根本不会", "吹得不好", "吹得一般", "吹得很好"], answer: 0},
        {category: "成语", question: "南郭先生是怎么混进去的？", options: ["装样子", "贿赂", "认识人", "运气好"], answer: 0},
        {category: "成语", question: "南郭先生每天做什么？", options: ["装模作样", "练习吹竽", "偷懒", "逃跑"], answer: 0},
        {category: "成语", question: "滥竽充数中的充数是什么意思？", options: ["凑数", "真数", "多数", "少数"], answer: 0},
        {category: "成语", question: "齐湣王继位后做了什么？", options: ["改革", "发动战争", "迁都", "娶妻"], answer: 0},
        {category: "成语", question: "南郭先生听说了改革后？", options: ["逃跑了", "继续混", "学会了", "告病了"], answer: 0},
        {category: "成语", question: "齐湣王改革后南郭先生怎么办？", options: ["溜走了", "被发现了", "学会了", "病了"], answer: 0},
        {category: "成语", question: "这个故事告诉我们要？", options: ["真才实学", "会混", "会装", "会跑"], answer: 0},
        {category: "成语", question: "杯弓蛇影中的蛇其实是什么？", options: ["弓的倒影", "真的蛇", "虫子", "鱼的倒影"], answer: 0},
        {category: "成语", question: "为什么弓的倒影像蛇？", options: ["光照反射", "弓像蛇", "酒浑浊", "眼睛花"], answer: 0},
        {category: "成语", question: "这个故事的道理是？", options: ["不要多疑", "不要喝酒", "不要用弓", "不要用杯"], answer: 0},
        {category: "成语", question: "赵奢是赵国的什么？", options: ["将军", "大臣", "商人", "学者"], answer: 0},
        {category: "成语", question: "赵奢和赵括是什么关系？", options: ["父子", "兄弟", "师徒", "朋友"], answer: 0},
        {category: "成语", question: "廉颇和赵括是什么关系？", options: ["同事", "敌人", "朋友", "师生"], answer: 0},
        {category: "成语", question: "廉颇对赵括什么态度？", options: ["反对", "支持", "无所谓", "欣赏"], answer: 0},
        {category: "成语", question: "赵王为什么派赵括去？", options: ["赵括说大话", "廉颇老了", "赵奢推荐", "运气"], answer: 0},
        {category: "成语", question: "长平之战是什么时期的？", options: ["战国", "春秋", "秦朝", "汉朝"], answer: 0},
        {category: "成语", question: "长平之战在哪发生的？", options: ["长平", "邯郸", "赵国都城", "秦赵边境"], answer: 0},
        {category: "成语", question: "白起最后怎么样了？", options: ["被赐死", "战死", "病死", "自杀"], answer: 0},
        {category: "成语", question: "白起为什么被赐死？", options: ["秦王怕他", "战败", "生病", "老了"], answer: 0},
        {category: "成语", question: "赵括纸上谈兵的结果是什么？", options: ["战败身亡", "大获全胜", "平局", "撤军"], answer: 0},
        {category: "成语", question: "纸上谈兵告诉我们什么道理？", options: ["空谈理论没有用", "要学习理论", "要写书", "要读兵书"], answer: 0},
        {category: "成语", question: "滥竽充数告诉我们什么道理？", options: ["没有真本事不能混", "要学会吹竽", "要合群", "要听指挥"], answer: 0},
        {category: "成语", question: "杯弓蛇影告诉我们什么道理？", options: ["不要疑神疑鬼", "不要喝酒", "不要用弓", "不要用杯"], answer: 0},
        {category: "成语", question: "这三个成语的共同点是？", options: ["都是寓言故事", "都是历史故事", "都是神话", "都是传说"], answer: 1},

        // 文学常识类（50题）
        {category: "常识", question: "苏轼的号是什么？", options: ["东坡居士", "青莲居士", "六一居士", "香山居士"], answer: 0},
        {category: "常识", question: "李白的号是什么？", options: ["青莲居士", "东坡居士", "六一居士", "香山居士"], answer: 0},
        {category: "常识", question: "白居易的号是什么？", options: ["香山居士", "青莲居士", "东坡居士", "六一居士"], answer: 0},
        {category: "常识", question: "欧阳修的号是什么？", options: ["六一居士", "青莲居士", "东坡居士", "香山居士"], answer: 0},
        {category: "常识", question: "陶渊明的号是什么？", options: ["五柳先生", "青莲居士", "东坡居士", "六一居士"], answer: 0},
        {category: "常识", question: "李清照的号是什么？", options: ["易安居士", "青莲居士", "东坡居士", "六一居士"], answer: 0},
        {category: "常识", question: "辛弃疾的号是什么？", options: ["稼轩", "青莲居士", "东坡居士", "六一居士"], answer: 0},
        {category: "常识", question: "陆游的号是什么？", options: ["放翁", "青莲居士", "东坡居士", "六一居士"], answer: 0},
        {category: "常识", question: "文天祥的号是什么？", options: ["文山", "青莲居士", "东坡居士", "六一居士"], answer: 0},
        {category: "常识", question: "苏轼是哪个朝代的人？", options: ["北宋", "南宋", "唐朝", "明朝"], answer: 0},
        {category: "常识", question: "辛弃疾是哪个朝代的人？", options: ["南宋", "北宋", "唐朝", "明朝"], answer: 0},
        {category: "常识", question: "李清照是哪个朝代的人？", options: ["南宋", "北宋", "唐朝", "明朝"], answer: 0},
        {category: "常识", question: "陆游是哪个朝代的人？", options: ["南宋", "北宋", "唐朝", "明朝"], answer: 0},
        {category: "常识", question: "文天祥是哪个朝代的人？", options: ["南宋", "北宋", "唐朝", "明朝"], answer: 0},
        {category: "常识", question: "唐宋八大家不包括？", options: ["李白", "韩愈", "柳宗元", "欧阳修"], answer: 0},
        {category: "常识", question: "唐宋八大家中宋代有几个？", options: ["6个", "5个", "4个", "3个"], answer: 0},
        {category: "常识", question: "唐宋八大家中唐代有几个？", options: ["2个", "3个", "4个", "5个"], answer: 0},
        {category: "常识", question: "苏轼是唐宋八大家之一吗？", options: ["是", "不是", "不确定", "不知道"], answer: 0},
        {category: "常识", question: "欧阳修是唐宋八大家之一吗？", options: ["是", "不是", "不确定", "不知道"], answer: 0},
        {category: "常识", question: "王安石是唐宋八大家之一吗？", options: ["是", "不是", "不确定", "不知道"], answer: 0},
        {category: "常识", question: "曾巩是唐宋八大家之一吗？", options: ["是", "不是", "不确定", "不知道"], answer: 0},
        {category: "常识", question: "苏洵是唐宋八大家之一吗？", options: ["是", "不是", "不确定", "不知道"], answer: 0},
        {category: "常识", question: "苏辙是唐宋八大家之一吗？", options: ["是", "不是", "不确定", "不知道"], answer: 0},
        {category: "常识", question: "三苏是指谁？", options: ["苏轼、苏洵、苏辙", "苏轼、苏辙、苏洵", "苏洵、苏轼、苏辙", "苏洵、苏辙、苏轼"], answer: 2},
        {category: "常识", question: "三苏中名气最大的是？", options: ["苏轼", "苏洵", "苏辙", "差不多"], answer: 0},
        {category: "常识", question: "苏洵是苏轼的？", options: ["父亲", "兄弟", "儿子", "朋友"], answer: 0},
        {category: "常识", question: "苏辙是苏轼的？", options: ["弟弟", "哥哥", "儿子", "朋友"], answer: 0},
        {category: "常识", question: "宋词四大流派不包括？", options: ["豪放派", "婉约派", "现实主义", "浪漫主义"], answer: 2},
        {category: "常识", question: "豪放派代表词人包括？", options: ["苏轼、辛弃疾", "李清照、柳永", "周邦彦、姜夔", "晏殊、欧阳修"], answer: 0},
        {category: "常识", question: "婉约派代表词人包括？", options: ["李清照、柳永", "苏轼、辛弃疾", "陆游、岳飞", "文天祥、范仲淹"], answer: 0},
        {category: "常识", question: "苏轼属于哪个流派？", options: ["豪放派", "婉约派", "现实主义", "浪漫主义"], answer: 0},
        {category: "常识", question: "李清照属于哪个流派？", options: ["婉约派", "豪放派", "现实主义", "浪漫主义"], answer: 0},
        {category: "常识", question: "辛弃疾属于哪个流派？", options: ["豪放派", "婉约派", "现实主义", "浪漫主义"], answer: 0},
        {category: "常识", question: "柳永属于哪个流派？", options: ["婉约派", "豪放派", "现实主义", "浪漫主义"], answer: 0},
        {category: "常识", question: "柳永的代表作是？", options: ["雨霖铃", "水调歌头", "念奴娇", "声声慢"], answer: 0},
        {category: "常识", question: "多情自古伤离别，更那堪，冷落清秋节。出自哪里？", options: ["《雨霖铃》", "《水调歌头》", "《念奴娇》", "《声声慢》"], answer: 0},
        {category: "常识", question: "杨柳岸，晓风残月。出自哪里？", options: ["《雨霖铃》", "《水调歌头》", "《念奴娇》", "《声声慢》"], answer: 0},
        {category: "常识", question: "今宵酒醒何处？出自哪里？", options: ["《雨霖铃》", "《水调歌头》", "《念奴娇》", "《声声慢》"], answer: 0},
        {category: "常识", question: "柳永被称为？", options: ["柳七", "柳三", "柳九", "柳八"], answer: 1},
        {category: "常识", question: "周邦彦的代表作是？", options: ["兰陵王", "雨霖铃", "水调歌头", "念奴娇"], answer: 0},
        {category: "常识", question: "姜夔的代表作是？", options: ["扬州慢", "雨霖铃", "水调歌头", "念奴娇"], answer: 0},
        {category: "常识", question: "吴文英的号是？", options: ["梦窗", "放翁", "稼轩", "易安"], answer: 0},
        {category: "常识", question: "吴文英的别称是？", options: ["吴七", "柳七", "周七", "姜七"], answer: 2},
        {category: "常识", question: "宋词常用的意象不包括？", options: ["太阳", "月亮", "柳树", "梅花"], answer: 0},
        {category: "常识", question: "宋词中的月亮意象通常象征？", options: ["思念", "光明", "团圆", "纯洁"], answer: 0},
        {category: "常识", question: "宋词中的柳树意象通常象征？", options: ["离别", "春天", "生命力", "坚韧"], answer: 0},
        {category: "常识", question: "宋词中的梅花意象通常象征？", options: ["高洁", "春天", "美丽", "坚韧"], answer: 0},
        {category: "常识", question: "宋词中的菊花意象通常象征？", options: ["隐逸", "秋天", "美丽", "高洁"], answer: 0},
        {category: "常识", question: "词的别称是？", options: ["长短句", "诗句", "文句", "言句"], answer: 0},
        {category: "常识", question: "词又称？", options: ["诗余", "文余", "言余", "语余"], answer: 0},
        {category: "常识", question: "词的特点是？", options: ["配合音乐演唱", "自由创作", "严格格律", "长短不一"], answer: 0},
        {category: "常识", question: "词牌名的来源不包括？", options: ["作者名", "曲调名", "内容概括", "数字"], answer: 0}
    ]
};

// 游戏状态
let gameState = {
    players: [],
    currentQuestionIndex: 0,
    currentPlayerIndex: 0,
    currentRound: 1,
    totalRounds: 10,
    difficulty: 'easy',
    questions: [],
    answerRevealed: false
};

// DOM 元素
const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen')
};

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const playerSelect = document.getElementById('player-select');
const selectedPlayersDiv = document.getElementById('selected-players');

// 预设玩家列表
const presetPlayers = ['Michael', 'Freda', '小兔子', '月季花', 'Deddy', 'Mom'];
// 已选择的玩家
let selectedPlayerNames = [];

// 洗牌函数
function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 获取难度中文名称
function getDifficultyName(difficulty) {
    const names = {
        easy: '简单',
        medium: '中等',
        hard: '困难'
    };
    return names[difficulty] || difficulty;
}

// 玩家选择功能
playerSelect.querySelectorAll('.player-option').forEach(btn => {
    btn.addEventListener('click', () => {
        const playerName = btn.dataset.name;

        if (selectedPlayerNames.includes(playerName)) {
            // 取消选择
            selectedPlayerNames = selectedPlayerNames.filter(n => n !== playerName);
            btn.classList.remove('selected');
        } else if (selectedPlayerNames.length < 6) {
            // 添加选择
            selectedPlayerNames.push(playerName);
            btn.classList.add('selected');
        }

        updateSelectedPlayersDisplay();
    });
});

// 更新已选择的玩家显示
function updateSelectedPlayersDisplay() {
    selectedPlayersDiv.innerHTML = '';
    if (selectedPlayerNames.length === 0) {
        selectedPlayersDiv.innerHTML = '<p style="color: #888;">请选择玩家...</p>';
    } else {
        selectedPlayerNames.forEach((name, index) => {
            const tag = document.createElement('span');
            tag.className = 'player-tag';
            tag.textContent = name;
            tag.innerHTML = `${name} <span class="remove-btn" data-name="${name}">×</span>`;
            selectedPlayersDiv.appendChild(tag);
        });

        // 添加移除按钮事件
        selectedPlayersDiv.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const nameToRemove = btn.dataset.name;
                selectedPlayerNames = selectedPlayerNames.filter(n => n !== nameToRemove);
                // 更新选择状态
                playerSelect.querySelectorAll('.player-option').forEach(optionBtn => {
                    if (optionBtn.dataset.name === nameToRemove) {
                        optionBtn.classList.remove('selected');
                    }
                });
                updateSelectedPlayersDisplay();
            });
        });
    }
}

// 开始游戏
startBtn.addEventListener('click', () => {
    if (selectedPlayerNames.length < 1) {
        alert('请至少选择一个玩家！');
        return;
    }

    // 从已选择的玩家创建玩家对象
    const players = selectedPlayerNames.map(name => ({ name, score: 0 }));

    // 获取难度
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

    // 初始化游戏状态
    gameState = {
        players,
        currentQuestionIndex: 0,
        currentPlayerIndex: 0,
        currentRound: 1,
        totalRounds: 10,
        difficulty,
        questions: shuffle(questionBank[difficulty]),
        answerRevealed: false
    };

    // 切换到游戏页面
    showScreen('game');
    updateGameDisplay();
    showQuestion();
});

// 显示指定页面
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
}

// 更新游戏显示
function updateGameDisplay() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    document.getElementById('current-player-name').textContent = currentPlayer.name;
    document.getElementById('current-round').textContent = gameState.currentRound;
    document.getElementById('total-rounds').textContent = gameState.totalRounds;

    // 更新计分板
    const scoreList = document.getElementById('score-list');
    scoreList.innerHTML = '';
    gameState.players.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = `score-item ${index === gameState.currentPlayerIndex ? 'active' : ''}`;
        item.innerHTML = `
            <span class="score-name">${player.name}</span>
            <span class="score-value">${player.score}分</span>
        `;
        scoreList.appendChild(item);
    });
}

// 显示问题
function showQuestion() {
    const question = gameState.questions[gameState.currentQuestionIndex];
    document.getElementById('question-category').textContent = question.category;
    document.getElementById('question-text').textContent = question.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = ['A', 'B', 'C', 'D'][index] + '. ' + option;
        btn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });

    gameState.answerRevealed = false;
    nextBtn.classList.add('hidden');
}

// 选择答案
function selectAnswer(index) {
    if (gameState.answerRevealed) return;

    const question = gameState.questions[gameState.currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];

    gameState.answerRevealed = true;

    options.forEach((btn, i) => {
        btn.disabled = true;
        if (i === question.answer) {
            btn.classList.add('correct');
        } else if (i === index && i !== question.answer) {
            btn.classList.add('wrong');
        }
    });

    // 如果答对了，加分
    if (index === question.answer) {
        const points = gameState.difficulty === 'easy' ? 10 :
                       gameState.difficulty === 'medium' ? 15 : 20;
        currentPlayer.score += points;
        updateGameDisplay();
    }

    nextBtn.classList.remove('hidden');
}

// 下一题
nextBtn.addEventListener('click', () => {
    gameState.currentPlayerIndex++;

    // 如果所有玩家都答过了
    if (gameState.currentPlayerIndex >= gameState.players.length) {
        gameState.currentPlayerIndex = 0;
        gameState.currentRound++;
    }

    // 如果游戏结束
    if (gameState.currentRound > gameState.totalRounds ||
        gameState.currentQuestionIndex >= gameState.questions.length - 1) {
        showResults();
        return;
    }

    gameState.currentQuestionIndex++;
    updateGameDisplay();
    showQuestion();
});

// 显示结果
function showResults() {
    // 按分数排序
    const sortedPlayers = [...gameState.players].sort((a, b) => b.score - a.score);

    document.getElementById('winner-name').textContent = sortedPlayers[0].name;
    document.getElementById('winner-score').textContent = `得分: ${sortedPlayers[0].score}`;

    const rankings = document.getElementById('final-rankings');
    rankings.innerHTML = '';

    sortedPlayers.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = 'ranking-item';
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1;
        item.innerHTML = `
            <span class="ranking-rank">${medal}</span>
            <span class="ranking-name">${player.name}</span>
            <span class="ranking-score">${player.score}分</span>
        `;
        rankings.appendChild(item);
    });

    showScreen('result');
}

// 重新开始
restartBtn.addEventListener('click', () => {
    showScreen('start');
    // 重置玩家选择
    selectedPlayerNames = [];
    updateSelectedPlayersDisplay();
    // 重置玩家选择按钮状态
    playerSelect.querySelectorAll('.player-option').forEach(btn => {
        btn.classList.remove('selected');
    });
});
