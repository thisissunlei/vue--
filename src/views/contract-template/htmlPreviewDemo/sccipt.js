
    (function () {

        var utils = {
            elemArr: [],
            paperHeight: 1533,
            //#region            
            template: '<div class="hander"><div class="logo-hander"><img class="logo" src="http://krspace-upload.oss-cn-qingdao.aliyuncs.com/activity_unzip/201803/G/185016410_985.png" alt="" srcset=""><span style="font-size:20px;vertical-align:middle;margin-left:10px">会员协议(增加)</span></div><div class="hander-detail"><div>协议号码：{{o-serialNumber}}</div></div></div><div style="text-align:right;padding:16px 0"><img class="qrCode" style="width:80px;height:80px"></div><div class="big-hander">第一部分&nbsp;&nbsp;会籍详情</div><div class="default-hander">主体信息</div><div></div><div class="tabel-hander">会员信息</div><table cellspacing="0" class="main-table"><tbody><tr class="firstRow"><td>会员公司/贵方（法定登记的名称）</td><td>{{lessee_name}}</td></tr><tr><td>管理员姓名</td><td></td></tr><tr><td>电话及电子邮箱</td><td></td></tr><tr><td>通讯地址</td><td></td></tr><tr><td>账单联系人</td><td></td></tr><tr><td>电话及电子邮箱</td><td></td></tr><tr><td>通讯地址</td><td></td></tr><tr><td>签署日期</td><td>{{sign_date}}</td></tr></tbody></table><div class="tabel-hander">&nbsp;KrSpace&nbsp;服务主体信息</div><table cellspacing="0" class="main-table"><tbody><tr class="firstRow"><td>公司名称</td><td>{{corporation_name}}</td></tr><tr><td>社区名称</td><td>{{community_name}}</td></tr><tr><td>社区经理</td><td style="text-align:center">#{img}</td></tr><tr><td>电子邮箱</td><td>{{contact_email}}</td></tr><tr><td>通讯地址</td><td>{{community_address}}</td></tr><tr><td>开户名称</td><td>{{account_name}}</td></tr><tr><td>开户账号</td><td>{{account_number}}</td></tr><tr><td>开户银行</td><td>{{bank_name}}</td></tr><tr><td colspan="2" style="border-radius:0 0 8px 8px">或者：贵方管理员接收&nbsp;KrSpace&nbsp;APP&nbsp;中推送的账单后，可由贵方使用支付宝进行支付。</td></tr></tbody></table><div class="default-hander">服务信息</div><div class="tabel-hander">服务费信息</div><table cellspacing="0" class="main-table"><tbody><tr class="firstRow"><td>服务期限</td><td>{{start_date}}至{{end_date}}</td></tr><tr><td>服务保证金</td><td>￥{{performance_bond}}</td></tr><tr><td>服务费总额(含税)</td><td>￥{{prefer_service_fee}}</td></tr></tbody></table><div class="tabel-hander">付款信息</div><table cellspacing="0" class="main-table"><tbody><tr class="firstRow"><td>付款周期（除首期付款外）</td><td>{{pay_type}}</td></tr><tr><td>首期付款金额</td><td>￥{{first_service_fee}}</td></tr><tr><td>首期付款日期</td><td>{{first_pay_date}}</td></tr></tbody></table><div class="tabel-hander">补充信息</div><table cellspacing="0" class="main-table"><tbody><tr class="firstRow"><td>居间方全称</td><td style="border-radius:0 8px 8px 0"></td></tr></tbody></table><div class="tabel-hander">月服务费</div><table cellspacing="0" class="detail-table" data-name="wf_station_contract_detail"><tbody><tr class="bg-big firstRow" style="border-radius:8px 8px 0 0"><td style="border-radius:8px 0 0 0">办公场所</td><td>标准月费</td><td>优惠</td><td style="border-radius:0 8px 0 0">签约月费</td></tr><tr data-content="wf_station_contract_detail"><td style="max-width:235px;word-wrap:break-word">{{code_or_name}}</td><td style="text-align:right">{{unit_price}}</td><td>{{discount}}</td><td style="text-align:right">{{deal_price}}</td></tr></tbody></table><div class="tabel-hander">服务费总额明细</div><div class="detail"><div style="padding:0 15px"><div id="wf_station_contract_station"></div></div><div class="formula"><div class="formula-content"><p>1. 日单价=签约月费/所在日历月天数（四舍五入，保留2位有效小数）。</p><p>2. 各办公场所服务费金额=日单价*天数（所在日历月的天数）之和+签约月费*月数（整日历月月数）。</p><p>3. 服务费总额=所有办公场所服务费金额之和。</p><p>4. 本协议中的“日、天”指日历日；“月”指日历月。</p></div></div></div><div class="tabel-hander">付款信息</div><table cellspacing="0" class="detail-table" id="wf_station_contract_period" data-name="wf_station_contract_period" style="border-radius:8px 8px 0 0"><tbody><tr class="bg-big firstRow"><td>期数</td><td>费用</td><td class="period">费用期间</td><td>付款到期日</td><td style="text-align:right">费用金额</td></tr><tr data-content="wf_station_contract_period"><td>{{period}}</td><td>{{fee_type}}</td><td class="date-format">{{start_date}}~{{end_date}}</td><td>{{last_payment_date}}</td><td style="text-align:right">{{amount}}</td></tr></tbody></table><div class="detail-end"><div>1.会籍首期服务费是指：</div><div>&nbsp;(1) 若服务期起始日为日历月的第一天，则会籍首期服务费=签约月费*月数（根据付款周期确定的月数）</div><div>&nbsp;(2) 若服务期起始日为日历月的第一天以外的日期，则会籍首期服务费=首期服务起始日至所在日历月尾日的天数*日单价+签约月费*月数（根据付款周期确定的月数）。</div></div><p>#{pagination}</p><div class="hander"><div class="logo-hander"><img class="logo" src="http://krspace-upload.oss-cn-qingdao.aliyuncs.com/activity_unzip/201803/G/185016410_985.png" alt="" srcset=""><span style="font-size:20px;vertical-align:middle;margin-left:10px">会员协议(增加)</span></div><div class="hander-detail"><div>协议号码：{{o-serialNumber}}</div></div></div><div class="agreementParts"><div class="big-hander">第二部分 条款和条件</div><div class="tow-hander">1.定义</div><p>1.1“授权代表人”指获得贵方相关授权、其行为对贵方具有法律约束力的个人。</p><p>1.2“场地容量”指会籍详情中“场地容量”处规定的数值。</p><p>1.3“会员公司”、“会员”或“贵方”指与 KrSpace 签署会员协议并在会籍详情中列明的公司、实体或个人。</p><p>1.4“办公场地”指会籍详情所列办公室房间号和/或工作区。</p><p>1.5“办公大楼”指 KrSpace 向会员提供或拟提供办公室、工作站、其他工作区和/或其他服务所在的整栋大楼或部分大楼。</p><p>1.6“管理员”指代表会员与“ KrSpace ”进行沟通联系的负责人。</p><p>1.7“KrSpace 会员网络”指可通过互联网或 KrSpace 的移动应用程序访问的 KrSpace 会员专属在线社区。</p><p>1.8注册地址保证金：如经 KrSpace 书面同意使用注册地址的，贵方需要交纳注册地址保证金。</p><div class="tow-hander">2.会员的权利义务</div><p>2.1服务。在会员遵守和履行本协议条款和条件（包括任何附件（统称“协议”）及KrSpace 不时制定及修改的任何其他管理规定的前提下，KrSpace 将在期限（见下文定义）内向会员提供下列服务（以下简称“服务”）。</p><p>2.1.1进出办公场地的权限。</p><p>2.1.2办公场地的定期维护服务。</p><p>2.1.3办公场地内的家具。</p><p>2.1.4根据 KrSpace 官网最新服务条款，访问和使用 KrSpace 会员网络站点的权限。</p><p>2.1.5根据 krspace官网 中有关最新规则访问和使用共享互联网的权限。</p><p>2.1.6使用办公大楼内向会员提供的打印机、复印机和/或扫描仪的权限。</p><p>2.1.7使用会议室的权限。该等使用均需事先预约，并视可用性而定。</p><p>2.1.8使用办公场地暖气和空调的权限。</p><p class="hasUnderline">2.1.9为合理、可接受的行政办公目的使用电力的权限。<span>经 KrSpace 同意的非行政办公目的的电力使用，KrSpace 将向贵方收取额外的费用。</span></p><p>2.1.10使用场所内的水吧和水吧内提供之饮料的权限。</p><p>2.1.11参加或享受仅限会员参加或享受的活动、待遇及促销的权限。</p><p>2.2特定服务。贵方办公场地以外的任何 KrSpace 场所之会议室及办公场地之暖气和空调可能仅可在正常营业日的正常营业时间内（见下文定义）使用。“正常营业时间”通常指正常营业日的09:00至18:00，“正常营业日”指周一至周五等工作日，国家法定节假日除外。</p><p>2.3 KrSpace 保留权利。</p><p class="hasUnderline">2.3.1 因提供服务、、维修维护、处理安全或紧急事务等原因，KrSpace 有权在发出事先通知或不发出事先通知的情况下进入贵方办公场地。</p><p class="hasUnderline">KrSpace 将尽量以口头或通过网站公告、电子邮件等形式提前通知贵方，并尽量采取合理的安全措施对贵方资料进行保密。KrSpace 可以临时移动贵方办公场地内的家具。</p><p class="hasUnderline">KrSpace 保留变更贵方办公场地的权利，前提是，KrSpace可提供与原办公场地面积和条件类似的新办公场地。</p><p class="hasUnderline">KrSpace 还可随时合理变更或调整向贵方办公场地提供的服务或家具的项目。本协议项下的服务可以由KrSpace、关联方或第三方提供。</p><p class="hasUnderline">2.3.2 贵方知晓本协议约定的办公场地尚在建设中，在本协议第一部分 会籍详情中载明的办公场地的编号/名称仅供参考，不作为最终入驻/交付的依据。KrSpace有权单方变更或者调整办公场地的编号/名称，并在作出调整后通知贵方。实际交付时以KrSpace邮件/书面函件通知的编号/名称为准，但KrSpace应承诺对办公场地编号/名称的调整不得影响原约定办公场地的工位数量或其他条件。</p><p class="hasUnderline">2.4会员解约。 如 KrSpace 未按期交付办公场地或交付的办公场地无法满足正常办公使用用途的，经贵司书面通知后20个工作日内仍无法提供符合正常办公用途的办公场地的（包括在同一社区提供相似条件的办公场地或者 KrSpace 关联公司提供的相似条件的办公场地等），贵司有权单方解除协议，KrSpace 退还贵司服务保证金、已付但未发生的会员服务费。</p><div class="tow-hander">3.贵方成员</div><p>3.1更新成员名单。仅成员名单所列人员将视为“会员”，有权享受本协议所述待遇。贵方成员可于以下日期中较晚者起开始使用、访问和/或享受服务：（i）起始日，或（ii）KrSpace 确认将相关人员加入成员名单之日。贵方应对成员名单的准确性负责。贵方管理员可通过其 KrSpace 会员网络之“会员管理”工具更新贵方的成员名单。如需在贵方成员名单中增加超出会籍详情中分配的成员数量的新成员，应由贵方管理员使用已向 KrSpace 备案的管理员电子邮箱，向会籍详情底部所列电子邮箱发送电子邮件。变更请求邮件应载明被替代的老成员和新成员的姓名、电子邮箱及变更生效日。若经常使用贵方办公场地的成员或其他人员的数量超过场地容量，则贵方应支付届时适用的额外费用，详见 krspace官网中的规则。在将任何人员加入成员名单后，KrSpace 将在 KrSpace 会员数据库中为该成员创建一份档案，该创建之档案仅载明该成员的姓名、联系电话和成员公司，包括照片在内的其余信息仅在贵方或贵方成员自行决定添加时予以添加。KrSpace、 KrSpace 员工和代理及其他会员均可查阅该档案。</p><p>3.2会员的管理员。管理员为会员方的指定联系人。会员管理员作出的任何承诺或行为均被视作相关会员的行为，包括变更或终止本协议。会员公司可以撤销管理员做出的任何行为，前提是，KrSpace 在管理员作出该项行为后24小时内收到该公司的书面通知(需公司加盖公章且法定代表人签字)。会员需根据KrSpace要求提供法定代表人证明等合理信息。。会员可随时书面通知(需公司加盖公章且法定代表人签字)我们变更其管理员。若指定为管理员的人士不再服务于会员公司或不再使用办公场地，则会员应在上述事项发生前书面通知KrSpace指定新的管理员。</p><p>3.3授权签字人。在本协议签约阶段，贵方须向签署本协议的人出具授权委托书，其行为对贵方具有法律约束力。</p><div class="tow-hander">4.会籍服务费；付款</div><p>4.1付款。贵方在递交经签字盖章的协议时，应向 KrSpace 支付贵方会籍详情所列款项：服务保证金及首期服务费。</p><p class="hasUnderline">4.2会籍服务费。会籍详情所列服务费仅包括会籍详情所列贵方成员数量的服务费。如增加成员需支付额外费用，详见 KrSpace 官网（ krspace.cn ）。</p><p>4.3发票及财务信息。在取得贵方付款的前提下，KrSpace 将向管理员提供发票和其他出账相关文件、信息及通知，除非会籍详情列明其他人为账单联系人。如需变更账单联系人，应由会员按照本协议规定发出通知。</p><p class="hasUnderline">4.4超额费。贵方每月将获得一定额度的会议室、复印机以及打印机之权限，详情在 krspace.cn 中载明。此项权利应在当月使用，不得递延至下月。若贵方超额使用该等借用权，则应支付超额费。目前的超额费费率表见 krspace.cn 。KrSpace 可以不时提高各项超额费的费率。</p><p class="hasUnderline">4.5逾期付款违约金。若贵方未在付款到期前交纳会员服务费或任何其他已产生而尚未支付费用的，则贵方应每日按照未支付费用的千分之三支付逾期付款违约金。</p><p>4.6付款方式。KrSpace 仅接受以 KrSpace 在本协议签署过程中或本服务期限内不时告知贵方的方式支付本协议项下所有款项。若贵方付款信息发生任何变更，应及时通知 KrSpace。在任何给定时间，贵方仅可使用一种方式支付本协议项下款项。</p><p class="hasUnderline">4.7未付费用。任何逾期未付费用应按实际欠款收取。在收到贵方付款后，KrSpace 将首先以之清偿欠款，再依次清偿当期的费用。在所有欠款清偿完毕后，剩余金额将用于支付当期费用。若在 KrSpace 向贵方发出催款通知后，贵方在KrSpace指定期限内仍不支付，则 KrSpace 可以自行决定暂停服务或按照第5.5条规定终止本协议。</p><div class="tow-hander">5.期限与终止</div><p>5.1期限。</p><p>5.1.1服务期限。本协议自双方签字及盖章后生效（“生效日”），前提是，KrSpace 在以下两者中较晚者发生之前并无义务向贵方提供服务：（i）KrSpace 收到贵方服务保证金及首期会员服务费之日，或（ii）起始日。</p><p>5.1.2搬入期限。贵方有权在服务期限起始日的固定时间（一般为9:00至18:00，周一至周五，法定节假日调休的除外）搬入办公场地;如办公场地所在物业管理公司有特殊约定的，以物业管理方约定为准。如贵方存在特殊需求，需提前协商。</p><p class="hasUnderline">5.2贵方可在服务期限起始日前（不包含当日）取消本协议。贵方可在起始日前通知 KrSpace 取消本协议，则 KrSpace 收取的服务保证金将不予退还。如 KrSpace 收取了贵方会员服务费的，在收到贵方取消本协议通知后的十个工作日内，KrSpace 退还实际收取的会员服务费。</p><p class="hasUnderline">5.3在本协议服务期限内，贵方不得提前终止本协议。如贵方提前终止，则 KrSpace 已经收取的费用不予退还，同时 KrSpace 保留追索剩余服务期限内会员服务费全款的权利。</p><p>5.4续约。贵我双方应在本协议服务期限届满前60日内，协商本协议续签事宜，如继续合作的，应在协商周期内另行签署续约协议；如未在本协议服务期限届满前达成续约意向的，则本协议服务期限届满之日自动终止。</p><p>5.5 KrSpace 终止或暂停履行本协议。</p><p class="hasUnderline">5.5.1在下列任一情形发生时，KrSpace 可在按照本协议第9.8条规定向贵方发出通知后暂停服务或立即终止本协议：（i）贵方（贵方任何成员的行为视为贵方的行为）违反本协议；（ii） KrSpace 对场所享有的权利终止、到期或房屋发生重大灭失时；（iii）贵方在 KrSpace 向贵方发出催款通知后在指定期限内仍不支付到期未付的费用；（iv）贵方(或贵方任何成员的行为视为贵方的行为）未遵守本协议条款和条件、KrSpace 会员网络服务条款、KrSpace 无线网络服务条款或我司提供的或适用于贵方的任何其他政策或指示。即使本协议终止或到期，贵方仍应对逾期未付的款项负责，KrSpace 仍可行使收取该等款项的权利。</p><p class="hasUnderline">一旦较早发生以下情形之一（x）本协议终止或期满；（y）贵方将该成员从成员名单中去掉或（z）KrSpace 通知贵方其成员重大或反复违反本协议，个人成员将不再被允许访问服务且不再被授权进入办公场地。</p><p class="hasUnderline">5.5.2 KrSpace 有权提前终止本协议，收回办公场地。如 KrSpace 提前收回办公场地或提前终止合同的，应至少提前三十（30）日通知，贵方应按照通知时间搬离，KrSpace 退还服务保证金、已付但未发生的服务费。</p><p>5.6服务保证金</p><p>5.6.1服务保证金将作为贵方履行本协议项下所有义务的保证金，而非用于抵扣应付费用的准备金。若贵方欠付我方其他费用，贵方不得将该等费用从服务保证金中扣除，而须另行支付该等费用。</p><p class="hasUnderline">5.6.2在<span>（i）本协议期满或正常终止及</span>（ii）贵方向我方提供账户信息之日（以两者中较晚者为准）起三十（30）天内，<span>我方将在如下条件：a.贵方腾空清理自有物品后返还办公场地；b.结清所有应支付款项；c.注册地址迁出或注销（如有）；d.不存在尚未解决的争议或者纠纷等条件同时满足的情况下，向贵方退还服务保证金余额。如保证金不足抵扣未结清费用或者赔偿 KrSpace 实际损失的， KrSpace 有权向贵方追索不足部分。</span></p><p>5.7移除财产。贵方应在本协议终止或到期前，将贵方、贵方成员、贵方访客或贵方成员访客的财产从办公场地和场所中移除。 KrSpace 有权在向贵方发出通知后，处置在本协议终止或到期后遗留在办公场地或场所中的任何财产，且没有存放该等财产的任何义务。贵方应放弃就该等财产或 KrSpace 对该等财产的处置提出任何索赔或要求的权利。贵方应负责支付 KrSpace 因移除和处理上述财产而合理产生的任何费用。本协议终止或到期后，KrSpace 不再转交或为贵方保留信件或其他包裹。</p><p>5.8注销注册地址</p><p>5.8.1除非获得 KrSpace 事先书面同意，贵方不得将 KrSpace 提供的地址作为贵方注册地址。</p><p class="hasUnderline">5.8.2若贵方在获得 KrSpace 书面同意后将 KrSpace 提供的地址作为贵方注册地址则在本协议终止前或到期前30天内，贵方应向当地主管机关（包括当地工商行政管理局）办理地址注销手续，并向 KrSpace 提供变更后的营业执照正本，供 KrSpace 审查核证。</p><p class="hasUnderline">5.8.3若贵方未在本协议终止前或期限届满前30天内，提供变更后的营业执照作为注册地址变更/注销证据的：（1）则贵方已经交纳的保证金（包括服务保证金和注册保证金），KrSpace 不予退还；<span>且（2）则每延迟一个日历月（不满一个日历月，按一个日历月计），贵方同意支付相当于会员服务费以下百分比的违约金：第一个完整日历月（不满一个日历月，按一个日历月计），50%；第二个日历月，100%；第三个日历月及其后各日历月，150%；且KrSpace 有权在贵方已经交纳的服务保证金中进行扣除或另行向贵方收取。如上述（1）-（2）的措施无法弥补 KrSpace 遭受的损失的，KrSpace有权进一步向贵方追索不足部分。同时，KrSpace 有权向注册地址所在行政机关进行举报。</span></p><p>5.8.4贵方应合法经营、照章纳税，否则，KrSpace 有权提前解除本协议，收回办公场地，贵方已经交纳的保证金(含服务保证金和注册保证金)不予退还。保证金(含服务保证金和注册保证金)无法弥补 KrSpace 遭受的实际损失的，KrSpace有权进一步向贵方追索不足部分。</p><div class="tow-hander">6.用房规则。</div><p>6.1 除贵方使用的办公场所适用的规则、政策和/或程序外，贵方确认并同意：</p><p>6.1.1用于实际访问场所或办公场地的钥匙、门卡等物品始终为 KrSpace 财产。贵方应促使贵方会员爱护 KrSpace 财产。因该等财产遗失、被盗或遭破坏而产生的重置费用应由贵方承担；</p><p>6.1.2若贵方联系方式或付款信息发生任何变更，应立即通知 KrSpace；</p><p>6.1.3若 KrSpace 的服务或费用发生任何变更或其他信息发生任何更新，KrSpace 将向贵方提供的电子邮箱发送电子邮件或者书面通知。贵方应负责查收该等邮件/函件，确保贵方会员知悉相关变更；</p><p>6.1.4提供给贵方使用的推车、手推车及其他搬运工具均不得在客梯内使用，除非 KrSpace 酌情批准该等使用；</p><p>6.1.5贵方所有会员均已至少年满十八周岁；</p><p>6.1.6贵方应全面负责确保在办公场地及办公大楼内:a.未达法定饮酒年龄的会员或访客不得饮酒；b.贵方所有成员及访客禁止吸烟。</p><p>6.1.7除 KrSpace 另有指示外，公共空间应由 KrSpace 所有会员公司、会员及访客共享，仅作临时办公使用，不得作为连续、日常的工作场地；</p><p>6.1.8贵方在场所内举办任何活动之前，应向 KrSpace 发出合理通知，并完成所需的全部手续；</p><p>6.1.9贵方应对贵方办公场地正常磨损以外的损害负责；</p><p>6.1.10未事先经 KrSpace 书面批准，贵方不得对办公场地作任何结构或非结构性改造或在办公场地安装墙壁附着物、家具或天线。若贵方违反此条，须在我方书面通知的期限内改正并恢复原状，否则 KrSpace 有权终止本协议，并没收保证金，并有权进一步追索我方的损失。</p><p>6.1.11贵方与贵方会员的计算机、平板电脑、移动设备和其他电子设备应：（i）更新到最新版本；及（ii）不含有任何恶意软件、病毒、间谍软件、蠕虫、木马或旨在执行恶意、敌意和/或入侵性操作的任何程序。 KrSpace 有权从 KrSpace 网络中移除对 KrSpace 网络或用户造成威胁的任何设备，直至威胁被去除为止；</p><p>6.1.12贵方同意 KrSpace 非排他并不可转让地：a.在 KrSpace 官网面向公众的“会员”展示栏、视频和其他宣传材料中；b.办公大楼产权方、物业管理方要求进行信息披露等情形使用贵方名称和/或标识，以标注贵方的 KrSpace 会员身份的行为。贵方保证贵方的标识不侵犯任何第三方的权利且贵方完全有义务提供该等同意（如需）。</p><p>6.1.13贵方应负责确保贵方会员遵守所有用房规则。</p><p>6.2会员不得：</p><p>6.2.1进行任何据合理预期可能对 KrSpace、任何其他会员公司、KrSpace 或任何其他会员公司的员工、访客或财产（包括但不限于办公场地）产生破坏性或危险性的活动或导致允许这样的情况发生；</p><p>6.2.2使用服务、场地或办公场所或在社区进行或从事任何非法或冒犯性活动；</p><p>6.2.3提供虚假身份信息；</p><p>6.2.4提取、复制或使用其他会员公司或其会员或访客的任何信息或知识产权，包括但不限于任何保密或专有信息、姓名、肖像、声音、商业名称、商标、服务标志、标识、商业外观、其他标识符号、其他知识产权或其修改或变更版本。本协议终止后，本条规定继续有效；</p><p>6.2.5未经 KrSpace 事先同意，为任何目的提取、复制或使用“KrSpace”或 KrSpace 任何其他商业名称、商标、服务标志、标识、商业外观、其他标识符号、其他知识产权或其修改或变更版本，或为任何目的拍摄、复制或使用场所任何部分的任何照片或图片。本协议终止后，本条规定继续有效；</p><p>6.2.6将办公场地用作“零售”、“医疗”“教育”“培训”或其他公众频繁造访的用途；</p><p>6.2.7复制办公场地或场所的任何钥匙、门卡或其他门禁设备，或将任何钥匙或门卡出借、分享或转让给任何第三方，除非经 KrSpace 事先授权；</p><p>6.2.8在办公场地或场所任何区域内安装任何锁具，除非经 KrSpace 事先授权；</p><p>6.2.9在访客未作登记且未完成 KrSpace 政策要求的任何其他手续的情况下，允许访客进入大楼。</p><p>6.2.10携带任何武器或任何其他攻击性、危险、易燃或爆炸性材料至办公场地。</p><div class="tow-hander">7.其他约定</div><p>7.1信息技术。KrSpace 未就 KrSpace 网络的安全性作出任何声明或保证。在贵方使用 KrSpace 网络时，KrSpace 无法保证特定的可用程度。在使用打印机时，贵方需要在贵方计算机上安装适当的打印机驱动程序。此外，贵方可以要求 KrSpace 解决打印、互联网连接或其他方面的问题。KrSpace 在提供此类服务时，不对贵方设备的任何损害负责，前提是，KrSpace 不存在疏忽。 KrSpace 通过有线或无线网络连接向会员提供共享的网络访问。对于希望安装私人有线网络的会员，经 KrSpace IT批准，KrSpace 允许贵方为独占访问和使用而安装防火墙设备且贵方对移除该安装负责。进行任何该等安装或移除之前，贵方应与 KrSpace IT团队合作、讨论该安装或移除的实际设置、适当时间、方式和方法及该要求可能产生的额外费用。如 KrSpace 因该安装或移除产生相关费用且贵方未另行支付，KrSpace 应从服务预付费中扣除该费用。贵方还应承担因贵方私人安装有线网络产生的相关月度费用。</p><p>7.2责任限制。贵司在 KrSpace 发生的非因 KrSpace 原因导致的任何及他方的财物纠纷、人身损害、工伤事故等，均由贵司自行处理解决，KrSpace 不对此承担任何责任。贵司在 KrSpace 所有财物自行保管，发生物品被盗、丢失等一切责任由贵司自行承担。 KrSpace 可提供摄像查看等配合调查。</p><p>7.3赔偿。对于因贵方或贵方会员、贵方或贵方会员的访客受邀者、或贵方或上述各方的作为或不作为违反本协议规定而引起的任何及所有索赔（包括第三方索赔）、责任与费用（包括合理律师费），贵方应向 KrSpace 方作出赔偿。贵方或贵方会员、贵方或贵方会员的访客邀请任何人进入场所的任何行为以及由此造成的任何损害，概由贵方负责。未经 KrSpace 书面同意，贵方不得进行需要 KrSpace 作出任何实质不利行为的和解或准许、或向任一 KrSpace 方强加任何义务的偿付行为或和解。对于未经某 KrSpace 方事先书面同意作出的任何偿付行为或和解，该 KrSpace 方不承担任何责任。</p><p>7.4保险。</p><p>7.4.1 KrSpace 提示贵方，贵方应负责在会员期限内以适合贵方业务的形式和金额，持续自费为贵方与贵方会员投保财产险（可选择基本险、综合险、一切险）、雇主责任险，公众责任险。保险范围须涵盖贵方会员或其访客遭受的、以及因未能或被拒绝使用或进入场所全部</p><p>或其部分空间而可能造成的财产损失、损害或伤害。</p><p>7.4.2 KrSpace 并不强制要求贵方投保，但如贵方投保的：（ⅰ）贵方应确保所有该等保单中应将贵方使用 KrSpace 的场地区域作为保险标的；（ⅱ）贵方应确保财产险、公众责任险保单中应将 KrSpace 作为共同受益人。贵方放弃贵方对 KrSpace 和场所业主可能享有的代位求偿权；（ⅲ）贵方如投保雇主责任险的，将免除因 KrSpace 一方过错而产生的侵权责任。</p><p>7.5其他会员。KrSpace 对其他会员公司、会员或任何其他第三方的行为没有控制权，对其行为概不负责。若会员公司、会员或其受邀者或访客之间产生任何争议，KrSpace 并无责任或义务介入、调解该等争议或向任何一方作出赔偿。</p><p>7.6隐私。根据 krspace.cn 上的隐私政策及全部适用数据保护法，KrSpace 收集、处理、传输和保护贵方与贵方会员的个人数据。请注意，除本协议另有约定外，贵方没有义务向 KrSpace 提供个人信息，KrSpace 收集的任何信息将由贵方自愿提供并经贵方签订本协议授权明确同意。贵方特此保证（i）告知任何新的或现有会员本条款和隐私政策的规定；（ii）必要时，获得该会员关于根据本协议规定收集、处理、传输和保护数据的同意；并（iii）根据适用法律，贵方实际收集和处理该会员的个人数据。</p><p>7.7不可抗力</p><p>7.7.1事件是指事先不能预见、不能避免并不能克服的客观情况，包括但不限于国家政策改变、战争、地震、台风、水灾、火灾、恐怖事件、其他社会异常事件（如罢工、骚乱）等意外事件。</p><p>7.7.2遭遇不可抗力事件的一方在事件发生后的3个工作日内将遭受不可抗力的情况通知对方，并在事件发生后14个工作日内提供不可抗力事件发生的有效证明文件。因不可抗力的发生导致本协议不能履行或履行本协议已失去意义时，贵我双方均可以解除本协议，任何一方不承担违约责任。</p><div class="tow-hander">8.诉讼和放弃代表诉讼</div><p>8.1准据法。本协议与本协议项下拟议交易受中华人民共和国（在本协议中不包括台湾、香港和澳门）法律管辖并据其释义，不考虑其冲突法规定，亦不适用《联合国国际货物买卖合同公约》。</p><p>8.2审裁地。除任何一方向任何有管辖权的法院寻求临时、保全与类似救济外，由本协议或本协议的违反、终止或无效引起或与之相关的、或根据普通法提起的任何争议、争端或索赔，经本协议双方友好协商未能解决的，应最终递交至北京市朝阳区人民法院（亦称为“朝阳法院”）进行审理。</p><div class="tow-hander">9.附则</div><p>9.1协议性质；双方关系。全部办公场地属 KrSpace 财产，由 KrSpace 拥有并控制。 KrSpace 授予贵方与 KrSpace 共同使用办公场地的权利，以便 KrSpace 向贵方提供服务。尽管本协议有任何相反规定，贵我双方同意，双方关系并非常规意义上的业主-租客或出租方-承租方关系，本协议不得被解释为授予贵方或任何会员对 KrSpace 业务、场所、办公场地或场所与办公场地之内或之上的任何物品享有任何所有权、地役权、留置权、占有权或其他相关权利。本协议并不创设租赁权益、租赁不动产权益或其他不动产权益。本协议双方作为独立缔约方履行本协议项下义务，本协议不得视为为任何目的创设任何信托或代理、合伙或合资关系。任何一方不得以任何方式对双方关系作出不实陈述。</p><p>9.2协议修订。会员服务费与超额费的修订适用第4.2条、第4.4条规定。KrSpace 将不时修订本协议其他条款，并使用包括但不限于书面、APP推送、本协议指定的电子邮箱等形式通知贵方。自 KrSpace 发送该等修订内容的通知之日起满7个日历日后，视为贵方已接受协议新条款规定。超出上述时间继续使用办公场地或服务的，视为接受新条款规定。</p><p>9.3弃权。任何一方的任何作为或不作为不得视为该方放弃其于本协议项下的权利或救济，弃权一方以书面形式签字确认弃权者除外。</p><p>9.4从属关系。本协议从属于并受制于 KrSpace 就场所与业主签署的租约、任何补充文件以及对 KrSpace 与业主之间的租约进行约束与规范的任何其他协议。但前述规定并不默示存在任何涉及不动产权益的转租或其他类似关系。</p><p>9.5特别事件。因超出 KrSpace 合理控制范围的任何事由或情况而导致 KrSpace 延迟或未履行本协议的情形下，包括但不限于：(i)场所施工发生延迟或变更，或 KrSpace 获得任何场所内任何空间的能力受到影响；及（ii）因属于 KrSpace 相关场所业主控制范围之内的情况而导致延迟或未履行，KrSpace 不承担任何责任，且不得视为 KrSpace 未履行或违反本协议。</p><p>9.6可分割性。一切 KrSpace 官网（ krspace.cn ）和会员的管理公约均为本协议不可分割的部分，各方须为遵守。KrSpace 保留在必要条件下修改管理公约的权利。若本协议中任何条款被相应有权管辖的法院裁决无效或不可执行，则仅有此类条款可在该管辖法域内被视为无效或不可执行，本协议的其他条款应当保持完整效力和效果。</p><p>9.7继续有效。本协议终止或到期后，第1条、第2.3条、第4条（仍有未付款项时）、第5.3条、第5.6条、第5.7条、第5.8条、第6.2条，第7.1条至7.3条、第8条、第9条以及据合理预期应在本协议终止或到期后继续有效的所有其他条款，应继续有效。</p><p>9.8通知。本协议项下所有通知均应可通过书面函件、本协议指定的电子邮件、APP推送等形式发送；如以书面形式发出的，自发出48小时后视为送达；如以电子邮件、APP推送等形式发出的，发出即视为已送达。KrSpace 可酌情合理决定采用何种方式向管理员发送通知。与本协议相关的任何通知应由管理员发送。</p><p>若贵方多个管理员不同时段发出的通知内容相互矛盾的，以 KrSpace 收到最后通知内容为准.</p><p>9.9标题；释义。本协议标题仅为方便而设，不得用于对本协议任何条款作出解释或释义。本协议中使用“包括”、“例如”或“譬如”等表达应酌情理解为其后紧跟“但不限于”。本协议提及的一天中的任何时间指办公场地所在时区的时间。</p><p>9.10禁止转让。除非贵方或贵方母公司进行吸收合并、新设合并、公司重组或出售全部或实质全部股权或资产，否则未经 KrSpace 事先同意，贵方不得（包括按照法律要求）转让或以其他方式让与贵方在本协议项下的任何权利或义务。KrSpace 可不经贵方同意转让本协议。</p><p>9.11反洗钱。贵方特此声明和保证贵方和贵方会员一直且将根据全部法律合乎道德地开展业务，包括但不限制于禁止商业贿赂和洗钱的法律（“反洗钱法”），且根据反洗钱法规定，贵方履行本协议项下支付义务的全部资金均为合法所得。贵方应提供 KrSpace 为遵守反洗钱法不时要求提供的全部信息和文件。</p><p>9.12反腐败法。贵方或贵方会员、贵方董事、高级职员、员工、代理、分包商、代表或代表贵方的任何人员，不得（i）直接或间接地提供、支付、给予、承诺或授权任何金钱、礼品或任何有价物给付给：（A）任何政府官员或任何商业当事人，（B）任何知悉或有理由知悉全部或部分该金钱、礼品或有价物将直接或间接地提供、支付或给予任何政府官员或任商业当事人的人，或（C）KrSpace 的任何员工或代表，以实现以下目的（1）影响政府官员或商业当事人其职权范围内的行为或决定，（2）引诱政府官员或商业当事人从事违反其职务法律责任的行为，（3）获取不正当利益或（4）确保签订本协议，（ii）就与本协议、服务或办公场地相关，直接地或间接地授权或进行支付、赠礼抑或提出或承诺该等支付或礼品。为本条款之目的，“政府官员”指任何政府部门或机构的任何官员、雇员或有官员职能的人员，包括国有企业或国家控制企业、公共国际组织及政党或政治职务官员或候选人。</p><p>9.13经纪人。贵方承诺并保证，如未在本协议列明经纪人，将视为贵方并未在本协议下之会籍交易中使用(房地产)经纪人。对于贵方违反本条承诺与保证而引起的任何索赔，贵方应向 KrSpace 作出赔偿,确保 KrSpace 不遭受损失。</p><p>9.14完整协议。本协议（包括第一部分会籍详情、第二部分条款和条件和第三部分专用条款）构成双方就本协议标题事项达成的完整协议。除双方签署书面文件或以其他方式许可外，不得以任何方式对本协议作出修订。双方就本协议所载事项达成的所有在先协议与谅解已并入本协议。</p><p>9.15协议份数。本协议（包括第一部分会籍详情、第二部分条款和条件和第三部分专用条款）一式两份，双方各持一份，具有同等法律效力。</p><p>9.16协议生效。</p><p>9.16.1本协议（包括第一部分会籍详情、第二部分条款和条件和第三部分专用条款）经双方签字及盖章后生效。</p><p>9.16.2会员或会员公司知悉并同意，将在签署本协议的5个工作日内向 KrSpace 提供如下证明材料：（1）会员公司需提供两（2）份公司营业执照复印件并加盖公司公章；（2）个人需提供两（2）份有效身份证或护照复印件；此外若该个人为公司雇员或者仅为公司工作或服务，其提供供的身份证/护照复印件还应加盖公司公章，而不论该个人是否与公司存在正式的劳动关系。</p><p>9.16.3签署本协议即表明贵方向 KrSpace 声明，协议签署人/公司拥有适当权限代表前文所列公司签署本协议并代表该公司产生本协议项下义务。</p>#{pagination}<div class="big-hander">第三部分 专用条款</div><div class="tow-hander">1. 组成本协议的文件及效力</div><p>1.1 组成本协议的文件包括：</p><p>（1）本协议第一部分 会籍详情；</p><p>（2）本协议第二部分 条款和条件；</p><p>（3）本协议第三部分 专用条款；</p><p>1.2本协议的第三部分 专用条款与第二部分 条款和条件的约定有冲突之处，以第三部分 专用条款为准。</p><div class="tow-hander">2. 专用条款内容如下：</div><p>2.1 其他约定：{{other_agreed}}</p><p>（以下无正文）</p></div>#{pagination}<div class="hander"><div class="logo-hander"><img class="logo" src="http://krspace-upload.oss-cn-qingdao.aliyuncs.com/activity_unzip/201803/G/185016410_985.png" alt="" srcset=""><span style="font-size:20px;vertical-align:middle;margin-left:10px">会员协议(增加)</span></div><div class="hander-detail"><div>协议号码：{{o-serialNumber}}</div></div></div><p>（以下无正文）</p><div class="all-end"><div style="page-break-inside:avoid"><p>会员签字：</p><p>公司名称：</p><p>盖章（合同专用章或者公章）：</p><p>法定代表人或者授权代表人（签字）：</p><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<p>KrSpace&nbsp;签字：</p><p>KrSpace&nbsp;实体名称：</p><p>盖章（合同专用章或者公章）：#{img}</p><p>法定代表人或者授权代表人（签字）：</p></div></div>',
            //#endregion 
            
            allData: {
                "end_date": "2018年11月26日",
                "wf_station_contract_period": [{
                    "end_date": "2018年11月26日",
                    "period": "首期",
                    "amount": "￥8,000.00",
                    "last_payment_date": "2018年08月12日",
                    "fee_type": "保证金",
                    "start_date": "2018年08月27日"
                }, {
                    "end_date": "2018年08月31日",
                    "period": "首期",
                    "amount": "￥645.20",
                    "last_payment_date": "2018年08月12日",
                    "fee_type": "服务费",
                    "start_date": "2018年08月27日"
                }, {
                    "end_date": "2018年10月31日",
                    "period": "首期",
                    "amount": "￥8,000.00",
                    "last_payment_date": "2018年08月12日",
                    "fee_type": "服务费",
                    "start_date": "2018年09月01日"
                }, {
                    "end_date": "2018年11月26日",
                    "period": "首期",
                    "amount": "￥3,466.32",
                    "last_payment_date": "2018年08月12日",
                    "fee_type": "服务费",
                    "start_date": "2018年11月01日"
                }],
                "account_number": "5719098608101060110180067",
                "old_performance_bond": "",
                "corporation_id": "9",
                "old_end_date": "",
                "other_serial_numbers": "KRHZHZWT18061101101801",
                "community_name": "万塘汇社区",
                "prefer_service_fee": "12,111.52  壹万贰仟壹佰壹拾壹元伍角贰分",
                "contract_status": "未生效",
                "old_service_fee": "",
                "unused_service_fee": "",
                "community_address": "浙江省杭州市万塘路262号万塘汇南楼5层",
                "performance_bond": "8,000.00  捌仟元整",
                "o-serialNumber": "KRHZHZWT18080101101801",
                "corporation_name": "杭州筑梦成信息技术有限公司",
                "contact_email": "wantanghui@krspace.cn",
                "old_serial_number": "KRHZHZWT18022601101801",
                "corporation_contact": "陈煜",
                "first_pay_date": "2018年08月12日",
                "all_performance_bond": "8000.00",
                "other_agreed_en": "none.",
                "wf_station_contract_station": [{
                    "code_or_name": "T5086-T5087",
                    "total_amount": "6,055.76",
                    "station_type": "工位",
                    "items": [{
                        "end_date": "2018年08月31日",
                        "amount": "￥322.60",
                        "code_or_name": "T5086-T5087",
                        "total_amount": "6,055.76",
                        "count": "5天*2个工位",
                        "type": "工位",
                        "unit_price": "32.26元/天/工位",
                        "start_date": "2018年08月27日",
                        "calculat_descr": "不足整月，以日计算",
                        "capacity": "1人间"
                    }, {
                        "end_date": "2018年10月31日",
                        "amount": "￥4,000.00",
                        "code_or_name": "T5086-T5087",
                        "total_amount": "6,055.76",
                        "count": "2个月*2个工位",
                        "type": "工位",
                        "unit_price": "1,000.00元/月/工位",
                        "start_date": "2018年09月01日",
                        "calculat_descr": "整月，以月计算",
                        "capacity": "1人间"
                    }, {
                        "end_date": "2018年11月26日",
                        "amount": "￥1,733.16",
                        "code_or_name": "T5086-T5087",
                        "total_amount": "6,055.76",
                        "count": "26天*2个工位",
                        "type": "工位",
                        "unit_price": "33.33元/天/工位",
                        "start_date": "2018年11月01日",
                        "calculat_descr": "不足整月，以日计算",
                        "capacity": "1人间"
                    }],
                    "capacity": "1人间"
                }, {
                    "code_or_name": "T5091-T5092",
                    "total_amount": "6,055.76",
                    "station_type": "工位",
                    "items": [{
                        "end_date": "2018年08月31日",
                        "amount": "￥322.60",
                        "code_or_name": "T5091-T5092",
                        "total_amount": "6,055.76",
                        "count": "5天*2个工位",
                        "type": "工位",
                        "unit_price": "32.26元/天/工位",
                        "start_date": "2018年08月27日",
                        "calculat_descr": "不足整月，以日计算",
                        "capacity": "1人间"
                    }, {
                        "end_date": "2018年10月31日",
                        "amount": "￥4,000.00",
                        "code_or_name": "T5091-T5092",
                        "total_amount": "6,055.76",
                        "count": "2个月*2个工位",
                        "type": "工位",
                        "unit_price": "1,000.00元/月/工位",
                        "start_date": "2018年09月01日",
                        "calculat_descr": "整月，以月计算",
                        "capacity": "1人间"
                    }, {
                        "end_date": "2018年11月26日",
                        "amount": "￥1,733.16",
                        "code_or_name": "T5091-T5092",
                        "total_amount": "6,055.76",
                        "count": "26天*2个工位",
                        "type": "工位",
                        "unit_price": "33.33元/天/工位",
                        "start_date": "2018年11月01>日",
                        "calculat_descr": "不足整月，以日计算",
                        "capacity": "1人间"
                    }],
                    "capacity": "1人间"
                }],
                "city_name": "杭州市",
                "cachetUrl": "http://krspace-upload.oss-cn-qingdao.aliyuncs.com/activity_unzip/201707/B/131112746_472.png",
                "first_service_fee": "20,111.52  贰万零壹佰壹拾壹元伍角贰分",
                "lessee_contact": "郭斌",
                "account_name": "杭州筑梦成信息技术有限公司",
                "bank_name": "招商银行股份有限公司杭州武林支行",
                "corporation_tel": "13588219677",
                "pay_type": "一次性付",
                "other_agreed": "无。",
                "start_date": "2018年08月27日",
                "wf_code": "gwxz",
                "community_code": "HZWT",
                "old_order_version": "3",
                "lessee_email": "",
                "lessee_name": "广州汇思信息科技有限公司",
                "service_fee": "12,111.52  壹万贰仟壹佰壹拾壹元伍角贰分",
                "inputor": "陈煜",
                "sign_date": "2018年08月01日",
                "deduction_bond": "",
                "unused_bond": "",
                "corporation_email": "chenyu@krspace.cn",
                "lessee_tel": "",
                "perfer_fee": "0.00  零元整",
                "wf_station_contract_detail": [{
                    "end_date": "2018年11月26日",
                    "code_or_name": "T5086-T5087",
                    "deal_price": "1,000.00元/月/工位",
                    "discount": "-",
                    "station_count": "2",
                    "type": "工位",
                    "unit_price": "1,000.00元/月/工位",
                    "capacity": "2",
                    "start_date": "2018年08月27日"
                }, {
                    "end_date": "2018年11月26日",
                    "code_or_name": "T5091-T5092",
                    "deal_price": "1,000.00元/月/工位",
                    "discount": "-",
                    "station_count": "2",
                    "type": "工位",
                    "unit_price": "1,000.00元/月/工位",
                    "capacity": "2",
                    "start_date": "2018年08月27日"
                }],
                "order_id": "13775"
            }
        }

        var printBox = document.getElementById("print-box");
        utils.template = tagRender(utils.template, utils.allData);
        utils.template = filterReplace(utils.template, utils.allData);

        printBox.innerHTML = utils.template

        detailReander("wf_station_contract_detail", utils.allData);
        detailReander("wf_station_contract_period", utils.allData);
        detailReander("wf_station_contract_finished", utils.allData);
        rentDetailsRender(utils.allData);



        var qrCodeDoms = getNode(".qrCode");
        for (var i = 0; i < qrCodeDoms.length; i++) {
            qrCodeDoms[i].src = utils.allData.qrImgUrl;
        }

        (function ($) {
            $.fn.extend({
                //表格合并单元格，colIdx要合并的列序号，从0开始
                "rowspan": function (colIdx) {
                    return this.each(function () {
                        var that;
                        $('tr', this).each(function (row) {
                            $('td:eq(' + colIdx + ')', this).filter(':visible').each(function (col) {
                                if (that != null && $(this).html() == $(that).html()) {
                                    rowspan = $(that).attr("rowSpan");
                                    if (rowspan == undefined) {
                                        $(that).attr("rowSpan", 1);
                                        rowspan = $(that).attr("rowSpan");
                                    }
                                    rowspan = Number(rowspan) + 1;
                                    $(that).attr("rowSpan", rowspan);
                                    $(this).hide();
                                } else {
                                    that = this;
                                }
                            });
                        });
                    });
                }
            });

        })(jQuery);
        //第一列合并
        $(document).ready(function () {
            $("#wf_station_contract_period").rowspan(0);
        });
        printBox.innerHTML = spliceKey(printBox.innerHTML, utils.allData);
        // dateFormat();

        function dateFormat() {
            var dateDom = $(".date-format");
            // console.log( dateDom);
            for (var i = 0; i < dateDom.length; i++) {
                // var chineseDom =  $(dateDom[i]).children('.chinese');
                // for(var i=0;i<chineseDom.length;i++){
                //     console.log( $(chineseDom[i]).html());

                // }
                var englishDom = $(dateDom[i]).children('.english');
                var chineseDom = $(dateDom[i]).children('.chinese');
                console.log(englishDom)
                var eStr = '';
                var cStr = ''
                for (var j = 0; j < englishDom.length; j++) {
                    console.log($(englishDom[j]).html());
                    if (j === 0) {
                        eStr += $(englishDom[j]).html() + "~";
                        cStr += $(chineseDom[j]).html() + "~";
                    } else {
                        eStr += $(englishDom[j]).html();
                        cStr += $(chineseDom[j]).html();
                    }
                    // eStr += $(englishDom[j]).html();
                    // cStr += $(chineseDom[j]).html();
                }
                console.log(eStr, "---", cStr)
                // return $(".date-format").append = (englishDom[i].html())
                dateDom[i].innerHTML = '<div>' + cStr + '</div><div>' + eStr + '</div>';

            }


        };


        function rentDetailsRender(allData) {
            var rentDetailsDom = document.getElementById('wf_station_contract_station');

            var rentDetailsData = allData.wf_station_contract_station;

            if (!rentDetailsData) {
                rentDetailsDom.innerHTML = '';
                return;
            }
            var str = '';
            for (var i = 0; i < rentDetailsData.length; i++) {
                str += tableRnder(rentDetailsData[i].rentType, rentDetailsData[i])
            }
            rentDetailsDom.innerHTML = str;
        }

        function detailReander(tableName, allData) {
            var feeDetailsContent = getNode('tr[data-content="' + tableName + '"]')[0]
            if (!feeDetailsContent) {
                return
            }
            var dpriceDetailData = allData[tableName];
            var contentHtml = feeDetailsContent.innerHTML;

            feeDetailsContent.parentNode.removeChild(feeDetailsContent);
            var detailName = getNode('table[data-name="' + tableName + '"]')[0];
            if (!dpriceDetailData || !isUllObject(dpriceDetailData)) {
                detailName.innerHTML = '';
                return;
            }
            var tableHtml = detailName.innerHTML;

            for (var i = 0; i < dpriceDetailData.length; i++) {
                var className = i == dpriceDetailData.length - 1 ? 'detail-content-tr' : '';
                var trHtml = spliceKey(contentHtml, dpriceDetailData[i]);
                tableHtml += '<tr class="' + className + '">' + trHtml + '</tr>';
            }
            detailName.innerHTML = tableHtml;
        }

        function isUllObject(data) {
            if (JSON.stringify(data) === '{}') {
                return false // 如果为空,返回false
            }
            return true
        }

        function tableRnder(type, allData) {
            var data = allData.items;

            var housHander = '<tr class="bg-big"><td style="text-align:center;width:145px">服务期</td><td style="width:150px">服务费</td><td style="text-align:center;width:170px">单价</td><td style="text-align:center">数量</td><td style="text-align:center">小计</td></tr>';
            var housContent = '<tr><td class="date-format" style="width:145px">{{start_date}}至<p>{{end_date}}</p></td><td style="width:150px">{{calculat_descr}}</td><td style="text-align:right;width:170px">{{unit_price}}</td><td>{{count}}</td><td style="text-align:right">{{amount}}</td></tr>';
            var stationHander = '<tr class="bg-big"><td style="text-align:center;width:145px">服务期</td><td style="width:150px">服务费</td><td style="text-align:center;width:170px">单价</td><td style="text-align:center">数量</td><td style="text-align:center">小计</td></tr>';
            var stationContent = '<tr><td class="date-format" style="width:145px">{{start_date}}至<p>{{end_date}}</p></td><td style="width:150px">{{calculat_descr}}</td><td style="text-align:right;width:170px">{{unit_price}}</td><td>{{count}}</td><td style="text-align:right">{{amount}}</td></tr>';
            var footer = '<div class="total"><div style="text-align:left;width:70%"><div style="word-break:break-all;width:100%"><div class="total-box wrapDiv">{{station_type}}</div><div class="total-box wrapDiv longWrap"><div class="cn_and_en">{{code_or_name}}</div></div></div></div><div style="text-align:right;width:30%">合计:￥{{total_amount}}</div></div>';
            var tableHtml = spliceKey(footer, allData) + ' <table cellspacing="0" >' + housHander;
            if (type == 'station') {
                tableHtml = spliceKey(footer, allData) + ' <table cellspacing="0" >' + stationHander;
            }
            for (var i = 0; i < data.length; i++) {
                if (type == "hous") {
                    tableHtml += spliceKey(housContent, data[i]);
                } else {
                    tableHtml += spliceKey(stationContent, data[i]);
                }
            }
            tableHtml += '</table>';
            return tableHtml;
        }

        //关键字提换
        function spliceKey(template, data) {
            for (key in data) {

                var htmlReg = new RegExp('{{' + key + '}}', 'ig');
                template = template.replace(htmlReg, data[key]);
            }
            return template;
        }

        function tagRender(template, data) {
            var allData = data;
            var imgReg = new RegExp('#{img}', 'ig');
            //分页标签
            var pageReg = new RegExp('#{pagination}', 'ig');
            //二维码
            var imgLabelling = allData.cachetUrl ? '<img style="position:absolute;display:inline-block;width:160px;height:160px;left:-80px;top:-80px" src = "' + allData.cachetUrl + '">' : '';
            template = template.replace(imgReg, '<span class="print-other-chapter" style="position: relative;">' + imgLabelling + '</span>');
            template = template.replace(pageReg, '<div class = "print-pagination-avoid"></div>');

            return template;
        }

        //获取节点
        function getNode(elem) {
            return document.querySelectorAll(elem);
        }

        function filterReplace(str, data) {
            var reg = /(\{#)((?!#\}).)+(#\})/g;
            str = str.replace(reg, function (value) {
                value = value.replace('{#', '').replace('#}', '');
                var arr = value.split('||');
                var thatValue = data[arr[0]];
                var pouseArr = thatValue.split('、');
                if (pouseArr.length > 7) {
                    return arr[1]
                } else {
                    return '';
                }
                /*if (!thatValue) {
                    return '';
                }
                var htmlReg = new RegExp('{{' + arr[0] + '}}', 'ig');
                return arr[1].replace(htmlReg, thatValue)*/
            });
            return str;
        }

    })()
