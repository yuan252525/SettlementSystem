'use strict';
import {
	domain,
	variable,
	AccountApi,
	AccountAdminApi,
	AccountStoreApi,
	ImgPre,
	ProductAPI,
	StoreAPI,
	ManageAPI,
	OperationAPI,
	UploadAPI,
	OrderAPI,
	SMSAPI
} from './domain';
/*
 页面地址
 * */
const ManagPath = {
	// login页面的地址
	login: domain + '/login.html',
	// 首页
	home_index: domain + '/'
};

const Api = {
	// 短信发送api
	sendSMS: SMSAPI,
	// 常用工具API
	getAreaByDeep: OperationAPI + '/area/list/deep',
	getAreaByParent: OperationAPI + '/area/list/parentid',
	//登录相关
	login: AccountAdminApi + '/login', //页面登录的url
	verification: AccountAdminApi + '/auth_code/new', //验证码的url
	//账号管理
	getAccountList: AccountAdminApi + '/member/search', //账号列表的url
	addAccount: AccountAdminApi + '/member/new', //增加账号
	unbindMobile: AccountAdminApi + '/member/mobile/unbind', //解绑手机号的url
	editPasswordUrl: AccountAdminApi + '/member/modify', //修改密码的url
	editAdminPassword: AccountAdminApi + '/password/modify', //修改管理员的密码
	adminSearch: AccountAdminApi + '/admin/search', //管理账号搜索,
    permissionList: AccountAdminApi + '/permission/tree', //权限点
    adminNameCheck: AccountAdminApi + '/admin/name/check', //查询管理员账号
    adminNew: AccountAdminApi + '/admin/new', //新建管理员
    adminModify: AccountAdminApi + '/admin/modify', //修改管理员
    adminGet: AccountAdminApi + '/admin/get', //获取组信息
    groupModify: AccountAdminApi + 'group/modify', //获取组信息
    adminRemove: AccountAdminApi + '/admin/remove', //删除管理员
    //待处理消息
    getPendingMessages:OperationAPI + '/system/message/list',
    //操作日志
    getOperationLogList:OperationAPI + '/operationlog/list',//获取操作日志列表
    getModuleList:OperationAPI + '/module/list',      //获取操作模块列表
    exportDatas: OperationAPI + '/operationlog/export',       //导出数据
	// 图片上传
	upload_image2: UploadAPI + '/image',
	// 地区相关
	areaListDeep: OperationAPI + '/area/list/deep', //根据深度获取地区列表
	areaListParentid: OperationAPI + '/area/list/parentid', //根据父节点ID获取地区列表

	//品牌列表
	getBrandList: ProductAPI + '/brand/list', // 获取品牌列表
	addBrand: ProductAPI + '/brand/add', // 增加品牌
	deleteBrand: ProductAPI + '/brand/delete', // 删除品牌
	editBrand: ProductAPI + '/brand/update', // 编辑品牌
	gooogsBrandClass: ProductAPI + '/brand/class/get', // 绑定分类
	getGoodsClassPidList: ProductAPI + '/goodsClass/list/', // 绑定分类-根据父id获取分类列表
	updateClassPid: ProductAPI + '/brand/class/update', // 修改绑定分类

	//终端商品列表
	channelGoodsList: ProductAPI + '/channelGoods/list', // 终端商品列表
	getChannelGoods: ProductAPI + '/channelGoods/get', // 终端商品审核页
	getchannelDetail: ProductAPI + '/channelGoods/get', // 终端商品审核页
	getCheById: ProductAPI + '/channelGoods/chkById', //按终端商品ID完成审核(在售/下架)

	//货源列表
	marketGoodsList: ProductAPI + '/marketGoods/list', // 货源商品列表
	getMarketGoods: ProductAPI + '/marketGoods/get', //根据ID获取货源商品
	getChklist: ProductAPI + '/marketGoods/chklist', //货源商品待审核列表
	getChkById: ProductAPI + '/marketGoods/chkById', //按货源商品ID完成审核
	getChgState: ProductAPI + '/marketGoods/chgState', //货源商品销售状态变更

	//分类管理
	getClassList: ProductAPI + '/goodsClass/list', //获取分类列表
	getClassListByPid: ProductAPI + '/goodsClass/list', // 根据pid获取分类子级分类(get)
	changeClassLabel: ProductAPI + '/goodsClass/update/label', // 修改商品标签
	deleteClassify: ProductAPI + '/goodsClass/delete', // 删除分类
	updateClassSort: ProductAPI + '/goodsClass/update/sort', // 更新分类排序
	createClassify: ProductAPI + '/goodsClass/add', // 创建分类
	editClassify: ProductAPI + '/goodsClass/update', // 编辑分类
	brandList: ProductAPI + '/brand/list', // 获取品牌；列表
	saveBrandList: ProductAPI + '/goodsClass/update/brand', // 保存绑定品牌

	getClassType: ProductAPI + '/goodsClass/get', //根据ID获取绑定的分类

	//类型管理
	typeList: ProductAPI + '/type/list', //获取类型列表
	addType: ProductAPI + '/type/add', // 添加类型
	deleteType: ProductAPI + '/type/delete', // 删除类型
	// getTypeInfo: ProductAPI + '/type/get', // 获取类型信息
	updateType: ProductAPI + '/type/update', // 更新类型信息

	// 属性管理
	attributeList: ProductAPI + '/attr/list', // 属性列表
	attributeAdd: ProductAPI + '/attr/add', // 增加属性
	attributeDelete: ProductAPI + '/attr/delete', // 删除属性
	attributeInfo: ProductAPI + '/attr/get', // 属性详情
	attributeUpdate: ProductAPI + '/attr/update', // 更新属性
	attrTypeList: OperationAPI + '/code/list/type', // 属性类型列表

	// 店铺管理
	storeRegList: StoreAPI + '/storeReg/list', // 审核开店列表
	storeInfoList: StoreAPI + '/storeInfo/list', // 店铺列表
	storeInfoDetail: StoreAPI + '/storeInfo/detail', // 店铺详情
	storeStateUpdate: StoreAPI + '/storeState/update', // 店铺更新状态
	storeReview: StoreAPI + '/storeReg/review', // 店铺审核
	storeBindAptitude: StoreAPI + '/bindAptitude/list', // 店铺资质申请列表
	storeQualificationsReview: StoreAPI + '/bindAptitude/review', // 店铺资质审核
	businessLicenseReplace: StoreAPI + '/storeBusiness/list', //营业执照更换列表
	businessLicenseExamine: StoreAPI + '/storeBusiness/review', //营业执照审核
	storeApprove: AccountAdminApi + '/registration/approve', // 店铺资质申请列表
	storeContractUpdate: StoreAPI + '/storeContract/update', // 店铺合同到期时间更新
	storeBindClassUpdate: StoreAPI + '/storeBindClass/update', // 店铺经营类目更新
    //店铺管理修改摊位号
	storeNumberUpdate: StoreAPI + '/storeNumber/update', // 店铺摊位号更新

	// 订单管理
	orderList: OrderAPI + '/list', // (订单列表)
	orderDetail: OrderAPI + '/get', // (订单详情)
    orderExport: OrderAPI + '/list/order/export',

	//商品目录
	goodsUpdateState: ProductAPI + '/catalog/updateState', //修改商品状态
	goodsList: ProductAPI + '/goodscommon/list', //获取商品目录列表
	reviewGoodsList: ProductAPI + '/applyGoodsCommon/verifylist', //待审核商品列表
	reviewedGoodsList: ProductAPI + '/applyGoodsCommon/list', //已审核商品列表
	reviewGoods: ProductAPI + '/applyGoodsCommon/get', //获取审核商品信息详情
	goodsSpecDetail: ProductAPI + '/applyAttribute/commonIdGet', //查询规格审核信息详情
	oneGoodsSpecDetail: ProductAPI + '/applyAttribute/idGet', //查询规单个格信息详情
	goodsSpecVerify: ProductAPI + '/applyAttribute/verify', //规格审核
	goodsStateUpdate: ProductAPI + '/applyGoodsCommon/updateState', //商品状态更新
	goodsExportTemp: ProductAPI + '/catalog/download/template/export', //获取商品列表
	goodsUpLoadFile: ProductAPI + '/catalog/import', // 商品目录页面上传文件excel
    goodsUpLoadExcel: UploadAPI + '/excel', // 商品目录页面上传excel
	goodsUpLoadZipFile: UploadAPI + '/compressFile', // 商品目录页面上传文件zip
	UploadRecordList: ProductAPI + '/catalog/upload/list', //获取商品导入记录列表（get）
	UploadRecordPicList: ProductAPI + '/catalog/uploadDetail/list', //获取商品导入图片列表
	goodsDelete: ProductAPI + '/catalog/delete', //删除商品目录
	goodsDeleteReview: ProductAPI + '/applyGoodsCommon/delete', //删除待审核列表项

    //订单 线下收款
    offlinePay: OperationAPI + '/Offline/Pay',  //查询线下收款
    offlineBack : OperationAPI + '/Offline/back', //保存线下收款
	// 资质绑定
	qualifyBindList: OperationAPI + 　'/saleAptitude/list', //列表
	qualifyBindAdd: OperationAPI + 　'/saleAptitude/add', //新增
	qualifyBindUpd: OperationAPI + 　'/saleAptitude/upd', //修改
	qualifyBindGet: OperationAPI + 　'/attrBindGc/selByAttrId', //由资质id获取绑定分类
	//销售属性
	getSaleAttrList: OperationAPI + 　'/saleAttr/list', //销售属性列表
	addSaleAttr: OperationAPI + 　'/saleAttr/add', //新增销售属性
	deleteSaleAttr: OperationAPI + 　'/saleAttr/del', //删除销售属性
	updateSaleAttr: OperationAPI + 　'/saleAttr/upd', //修改销售属性
	//公告管理
	getArticleList: OperationAPI + 　'/affiche/list', //公告管理列表
	deleteArticle: OperationAPI + 　'/affiche/del', //删除公告
	addArticle: OperationAPI + 　'/affiche/add', //增加公告
	updateArticle: OperationAPI + 　'/affiche/upd', //修改公告
	//服务指南分类
	getServiceClassList:OperationAPI + 　'/serviceInformationClass/list',    					 //服务指南分类列表
	updateServiceInformationClassSort: OperationAPI + '/serviceInformationClassSort/update', //服务指南分类排序
	addServiceInformationClass: OperationAPI + '/serviceInformationClass/add',        		 //增加服务指南分类
	updateServiceInformationClass: OperationAPI + '/serviceInformationClass/update',         //修改服务指南分类
	deleteServiceInformationClass: OperationAPI + '/serviceInformationClass/delete',		 //删除服务指南分类
	//文章分类
	articleClassList: OperationAPI + '/classArticle/list', //获取文章列表
	articleSort: OperationAPI + '/classArticleSort/update', //文章排序
	articleDelete: OperationAPI + '/classArticle/delete', //文章删除
	articleAdd: OperationAPI + '/classArticle/add', //文章添加
	articleChange: OperationAPI + '/classArticle/update', //文章修改
	articleDetails: OperationAPI + '/classArticle/get', //文章详情

	//货源商品列表
	checkGoodsList: ProductAPI + '/marketGoods/list', // 货源商品列表
	//获取绑定属性列表
	brandPropertyList: OperationAPI + '/gcBindAttr/list', // 获取绑定属性列表
	//获取销售属性列表
	sellPropertyList: OperationAPI + '/saleAttr/list', // 获取销售属性列表
	//新增属性绑定
	newPropertyBrand: OperationAPI + '/gcBindAttr/add', // 新增属性绑定
	//改绑接口  gcBindAttr/upd
	changePropertyBrand: OperationAPI + '/gcBindAttr/upd', // 改绑属性接口
	//商品创建
	getTypeInfo: ProductAPI + '/type/get', // 获取类型信息
	getFactoryInfo: ProductAPI + '/catalog/factoryGet', // 获取厂商信息
	getCurrentDate: AccountApi + '/timestamp', //获取服务器时间
	addGoods: ProductAPI + '/catalog/add', // 添加商品
	validateBarcode: ProductAPI + '/catalog/add/barcode', // 添加商品
	updateGoods: ProductAPI + '/catalog/update', // 编辑商品
	updateApplyGoods: ProductAPI + '/catalog/update', // 编辑商品
	goodsDetail: ProductAPI + '/catalog/get', //根据id查询商品目录详情
	applyGoodsDetail: ProductAPI + '/applyGoodsCommon/get', //根据id查询商品目录详情(待审核的)
	getAttrDefined: ProductAPI + '/attr/typeIdList', //获取属性定义
//	getAttrDefined: 'http://192.168.2.69:8080/product/v1/attr/typeIdList', //获取属性定义
//	goodsDetail: 'http://192.168.2.69:8080/product/v1/catalog/get', //根据id查询商品目录详情
//	addGoods: 'http://192.168.2.69:8080/product/v1/catalog/add', // 添加商品
//	updateGoods: 'http://192.168.2.69:8080/product/v1/catalog/update', // 编辑商品

    //物流管理API
    getLogisticsData: OperationAPI +'/express/list',//获取物流管理列表
    addCompanyInformation: OperationAPI + '/express/add',//新增公司物流信息
    editLogisticsCompany: OperationAPI + '/express/update',//编辑公司物流信息
    getLogisticsCompanyDetails : OperationAPI + '/express/get',//获取物流公司信息
    modifyState : OperationAPI + '/express/updateState',//修改公司状态

    //展位管理API
    getSlideList: OperationAPI + '/marketRecommend/list',//获取幻灯片展示
    addSlideList: OperationAPI + '/marketRecommend/add',//增加展示幻灯片
    updSlideList: OperationAPI + '/marketRecommend/upd',//更新幻灯片排序
    delSlideList: OperationAPI + '/marketRecommend/del',//删除幻灯片展示
    getBrand: ProductAPI + '/brand/get',//获取公司品牌

    //推荐商品列表
    getPickWeek: OperationAPI + '/brandRecom/list',//推荐商品列表
    delPickWeek: OperationAPI + '/brandRecom/del',//删除商品列表
    updatePickWeek: OperationAPI + '/brandRecom/update',//修改商品列表
    addPickWeek: OperationAPI + '/brandRecom/add',//增加商品列表

    //增加推荐商品
    getBrandListTwo: ProductAPI + '/marketGoodsRecom/list',//获取推荐商品列表
    addBrandList: ProductAPI + '/marketGoodsRecom/add',//增加商品列表
    delBrandList: ProductAPI + '/marketGoodsRecom/del',//删除商品列表
    updateBrandList: ProductAPI + '/brandRecom/update',//修改商品列表
    sortBrandList: ProductAPI + '/marketGoodsRecom/update',//修改商品列表


    //热搜词显示
    getWords: OperationAPI + '/hotSearch/list',//获取热词显示列表
    updWords: OperationAPI + '/hotSearch/upd',//修改热词显示列表

    //意见管理
    getFeedbackList: OperationAPI + '/feedback/list',//获取意见反馈列表
    getFeedback: OperationAPI + '/feedback/view',//查看反馈详情

    //获取推荐品牌列表
    getBrandRecommendation: ProductAPI + '/brandRecom/list',//获取推荐品牌列表
    delBrandRecommendation: ProductAPI + '/brandRecom/del',//删除推荐品牌列表
    sortBrandRecommendation: ProductAPI + '/brandRecom/sortupdate',//排序列表
    addBrandRecommendation: ProductAPI + '/brandRecom/add',//增加列表
    updateBrandRecommendation: ProductAPI + '/brandRecom/update',//增加列表

    //营销管理
    getVoucherList: OperationAPI + '/voucher/list',//优惠券列表
    updateGrantState: OperationAPI + '/voucher/grantState/upd',//优惠券发放状态变更
    getVoucherStatistics: OperationAPI + '/voucher/stats',//优惠券发放/使用统计

    addVoucher: OperationAPI + '/voucher/add', //增加优惠券
    getVoucherNumber: OperationAPI + '/voucher/add/count',
    setTimeVoucher: OperationAPI + '/voucher/grant/timer', //定时发送优惠券

    //下单统计
    orderStatistics: ProductAPI + '/order/stats',//下单统计
    //货源商品需求统计
    commoditySupply: ProductAPI + '/goods/stats',//货源商品需求统计
    //单个商品按规格分析
    singleGoodSupply: ProductAPI + '/singleGoods/stats',//单个商品按规格分析
    //商品三级分类统计
    classificationStatistics: ProductAPI + '/goodsClass/stats',//商品三级分类统计
    //商品分析增加商品查询列表
    goodsAnalysisStatistics: ProductAPI + '/goodsAnalysis/add/list',//商品分析增加商品查询列表

    //登陆推广图设置
    landingPromotion: OperationAPI + '/loginExtensionImage/add',// 增加图片
    updateLandingPromotion: OperationAPI + '/loginExtensionImage/update',// 修改图片
    getLandingPromotion: OperationAPI + '/loginExtensionImage/get',// 获取图片数据回显

    //货源货主销售统计
    getSupplierList: OperationAPI + '/allStore/list', //查询所有供应商
    getSalesStatistics: ProductAPI + '/custGms/stats',//查询销售商品统计

    //每日收款列表
    getDailyReceiptsList: OrderAPI + '/dailyCollection/list', //获取每日收款列表
    exportSettleReport: OrderAPI + '/dailyCollection/export', //导出每日收款

    //每日订单结算列表
    getDailyOrderList: OrderAPI + '/dailySettlement/list', //每日订单结算列表
    exportDailyOrderList: OrderAPI + '/settleReport/export', //导出每日订单结算
};

const ImagePre = {
	imgDomain:ImgPre
};

export default {
	ManagPath,
	Api,
	ImagePre
};
export {
	ManagPath,
	Api,
	ImagePre
};
