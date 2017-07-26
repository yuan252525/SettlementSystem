'use strict';
export default function(router) {
	router.map({
		'/': { // 首页
			name: '/index',
			component: function(resolve) {
				require(['../../view/bizcomponent/index.vue'], resolve);
			},
			auth: false
		},
		'/goods': { // 商品管理
			name: '/goods',
			component: function(resolve) {
				require(['../../view/bizcomponent/goods.vue'], resolve);
			},
			titleName:'商品管理',
			auth: true,
			subRoutes: {
				/* 商品目录start*/
				'/goodsCatalogue': {
					name: '/goodsCatalogue',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/goodsCatalogue.vue'], resolve);
					},
					titleName:'商品目录',
					auth: true
				},
				'/goodsImport': {
					name: '/goodsImport',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/goodsImport.vue'], resolve);
					},
					titleName:'商品批量导入',
					auth: true
				},
				'/uploadRecordGoodsDetail': {
					name: '/uploadRecordGoodsDetail',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/uploadRecordGoodsDetail.vue'], resolve);
					},
					titleName:'导入商品详情',
					auth: true
				},
				'/uploadRecordPicDetail/:uploadId': {
					name: '/uploadRecordPicDetail',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/uploadRecordPicDetail.vue'], resolve);
					},
					titleName:'导入图片详情',
					auth: true
				},
				/* 商品目录end*/
				/* 商品录入start*/
				'/addGoods': {
					name: '/addGoods',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/addGoods.vue'], resolve);
					},
					titleName:'商品录入',
					auth: true
				},
				/* 商品录入end*/
				/* 商品录入start*/
				'/goodsAdd': {
					name: '/goodsAdd',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/goodsAdd.vue'], resolve);
					},
					titleName:'商品录入',
					auth: true
				},
				/* 商品录入end*/
				/* 商品编辑start*/
				'/editGoods/:goodsId': {
					name: '/editGoods',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/goodsEdit.vue'], resolve);
					},
					titleName:'商品编辑',
					auth: true
				},
				/* 商品编辑end*/
				/* 商品编辑start*/
				'/auditGoods/:goodsId/:isaudit': {
					name: '/auditGoods',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/goodsEdit.vue'], resolve);
					},
					titleName:'审核商品采纳',
					auth: true
				},
				/* 商品编辑end*/
				/* 待审核start*/
				'/reviewGoods': {
					name: '/reviewGoods',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/reviewGoods.vue'], resolve);
					},
					titleName:'待审核商品',
					auth: true
				},
				/* 待审核end*/
				/*商品详情start*/
				'/goodsDetail/:goodsType/:goodsId': {
					name: '/goodsDetail/catalogue',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/goodsDetail.vue'], resolve);
					},
					titleName:'商品详情',
					auth: true
				},
				/* 商品详情end*/
				/*商品详情start*/
				'/reviewGoodsDetail/:goodsType/:goodsId': {
					name: '/reviewGoodsDetail',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/goodsDetail.vue'], resolve);
					},
					titleName:'待审核商品详情',
					auth: true
				},
				/* 商品详情end*/
				/*审核规格详情start*/
				'/goodsSpecDetail/:goodsCommonId': {
					name: '/goodsSpecDetail',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/goodsSpecDetail.vue'], resolve);
					},
					titleName:'商品规格审核',
					auth: true
				},
				/* 审核规格详情end*/
				/*规格详情start*/
				'/oneGoodsSpecDetail/:attributeValueId': {
					name: '/oneGoodsSpecDetail',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/oneGoodsSpecDetail.vue'], resolve);
					},
					titleName:'商品规格详情',
					auth: true
				},
				/* 规格详情end*/
				/* 已审核start*/
				'/reviewedGoods': {
					name: '/reviewedGoods',
					component: function(resolve) {
						require(['../../view/goodsManage/goods/reviewedGoods.vue'], resolve);
					},
					titleName:'已审核商品',
					auth: true
				},
				/* 已审核end*/
				/* 分类管理start*/
				'/classManage': {
					name: '/classManage',
					component: function(resolve) {
						require(['../../view/goodsManage/class/classManage.vue'], resolve);
					},
					titleName:'分类管理',
					auth: true
				},
				/* 分类管理end*/
				/* 创建分类start*/
				'/createClassify': {
					name: '/createClassify',
					component: function(resolve) {
						require(['../../view/goodsManage/class/createClassify.vue'], resolve);
					},
					titleName:'创建分类',
					auth: true
				},
				/* 创建分类end*/
				/*增加下级分类页star*/
				'/addSubClass/:sub': {
					name: '/addSubClass',
					component: function(resolve) {
						require(['../../view/goodsManage/class/addSubClass.vue'], resolve);
					},
					titleName:'增加下级分类',
					auth: true
				},
				/*增加下级分类页end*/
				/* 品牌绑定start*/
				'/brandBind/:gcid_sn/:gcname_sn': {
					name: '/brandBind',
					component: function(resolve) {
						require(['../../view/goodsManage/class/brandBind.vue'], resolve);
					},
					titleName:'品牌绑定',
					auth: true
				},
				/* 品牌绑定end*/
				/* 编辑分类start*/
				'/editClassify/:gcid_sn': {
					name: '/editClassify',
					component: function(resolve) {
						require(['../../view/goodsManage/class/editClassify.vue'], resolve);
					},
					titleName:'编辑分类',
					auth: true
				},
				/* 编辑分类end*/
				/* 分类管理end*/
				/* 分类排序start*/
				'/classSort': {
					name: '/classSort',
					component: function(resolve) {
						require(['../../view/goodsManage/class/classSort.vue'], resolve);
					},
					titleName:'分类排序',
					auth: true
				},
				/* 分类排序end*/
				/* 品牌管理start*/
				'/brandManage': {
					name: '/brandManage',
					component: function(resolve) {
						require(['../../view/goodsManage/brand/brandManage.vue'], resolve);
					},
					titleName:'品牌管理',
					auth: true
				},
				/*创建品牌*/
				'/addBrand': {
					name: '/addBrand',
					component: function(resolve) {
						require(['../../view/goodsManage/brand/addBrand.vue'], resolve);
					},
					titleName:'创建品牌',
					auth: true
				},
				/*编辑品牌*/
				'/editBrand/:brandId/:index': {
					name: '/editBrand',
					component: function(resolve) {
						require(['../../view/goodsManage/brand/editBrand.vue'], resolve);
					},
					titleName:'编辑品牌',
					auth: true
				},
				/*绑定分类*/
				'/brandClass/:brandId/:brandName': {
					name: '/brandClass',
					component: function(resolve) {
						require(['../../view/goodsManage/brand/brandClass.vue'], resolve);
					},
					titleName:'绑定分类',
					auth: true
				},
				/* 品牌管理end*/
				/* 类型管理start*/
				'/typeManage': {
					name: '/typeManage',
					component: function(resolve) {
						require(['../../view/goodsManage/type/typeManage.vue'], resolve);
					},
					titleName:'类型管理',
					auth: true
				},
				/* 类型管理end*/
				/* 类型编辑start*/
				'/typeEdit/:typeId': {
					name: '/typeEdit',
					component: function(resolve) {
						require(['../../view/goodsManage/type/typeEdit.vue'], resolve);
					},
					titleName:'类型编辑',
					auth: true
				},
				'/typeAdd/:typeId': {
					name: '/typeAdd',
					component: function(resolve) {
						require(['../../view/goodsManage/type/typeEdit.vue'], resolve);
					},
					titleName:'创建类型',
					auth: true
				},
				/* 类型编辑end*/
				/* 属性管理start*/
				'/attributeManage': {
					name: '/attributeManage',
					component: function(resolve) {
						require(['../../view/goodsManage/attributes/attributeManage.vue'], resolve);
					},
					titleName:'属性管理',
					auth: true
				},
				'/attributeAdd': {
					name: '/attributeAdd',
					component: function(resolve) {
						require(['../../view/goodsManage/attributes/AddPage.vue'], resolve);
					},
					titleName:'创建属性',
					auth: true
				},
				'/attributeEdit/:attrId': {
					name: '/attributeEdit',
					component: function(resolve) {
						require(['../../view/goodsManage/attributes/EditPage.vue'], resolve);
					},
					titleName:'编辑属性',
					auth: true
				},
				/* 属性管理end*/
				/*商品start*/
//				'/goodsAdd': {
//					name: '/goodsAdd',
//					component: function(resolve) {
//						require(['../../view/goodsManage/goods/addGoods.vue'], resolve);
//					},
//					auth: true
//				}
				/*商品end*/
			}
		},
		'/operation': { // 运营管理-运营
			name: '/operation',
			component: function(resolve) {
				require(['../../view/bizcomponent/operations.vue'], resolve);
			},
			auth: true,
			subRoutes: {
				/* 展位管理start*/
				'/indexPPTManage': {
					name: '/indexPPTManage',
					component: function(resolve) {
						require(['../../view/operationManage/operation/boothManage/indexPPTManage.vue'], resolve);
					},
					titleName:'首页幻灯设置',
					auth: true
				},
				'/brandPPTManage': {
					name: '/brandPPTManage',
					component: function(resolve) {
						require(['../../view/operationManage/operation/boothManage/brandPPTManage.vue'], resolve);
					},
					titleName:'推荐品牌设置',
					auth: true,
					subRoutes:{
						 "/:brandRecommend":{
						 	name: '/brandPPTManage',
							component: function(resolve) {
								require(['../../view/operationManage/operation/boothManage/brandPPTManage.vue'], resolve);
							},
							titleName:'推荐品牌设置',
							auth: true
						 }
					}

				},
				'/goodsPPTManage': {
					name: '/goodsPPTManage',
					component: function(resolve) {
						require(['../../view/operationManage/operation/boothManage/goodsPPTManage.vue'], resolve);
					},
					titleName:'推荐商品设置',
					auth: true,
					subRoutes:{
						"/:goodsCommend":{
							name: '/goodsPPTManage',
							component: function(resolve) {
								require(['../../view/operationManage/operation/boothManage/goodsPPTManage.vue'], resolve);
							},
							titleName:'推荐商品设置',
							auth: true
						}
					}
				},
				'/hotSearchManage': {
					name: '/hotSearchManage',
					component: function(resolve) {
						require(['../../view/operationManage/operation/boothManage/hotSearchManage.vue'], resolve);
					},
					titleName:'热搜词设置',
					auth: true
				},
                '/addBrandPPTManage/:isItemName/:menu_Id': {
                    name: '/addBrandPPTManage',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/boothManage/addBrandPPTManage.vue'], resolve);
                    },
                    titleName:'增加推荐品牌页',
                    auth: true
                },
                '/modifyBrandPPTManage/:brand_name/:isItemName/:menu_Id/:brand_id': {
                    name: '/modifyBrandPPTManage',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/boothManage/modifyBrandPPTManage.vue'], resolve);
                    },
                    titleName:'修改推荐品牌页',
                    auth: true
                },
                '/addGoodsPPTManage': {
                    name: '/addGoodsPPTManage',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/boothManage/addGoodsPPTManage.vue'], resolve);
                    },
                    titleName:'增加推荐商品',
                    auth: true
                },
                '/loginPicManage': {
                    name: '/loginPicManage',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/boothManage/loginPicManage.vue'], resolve);
                    },
                    titleName:'登录推广图设置',
                    auth: true
                },
				/* 展位管理end*/
				/* 营销管理start*/
				'/marketingManage': {
					name: '/marketingManage',
					component: function(resolve) {
						require(['../../view/operationManage/operation/marketingManage/marketingManage.vue'], resolve);
					},
					titleName:'营销管理',
					auth: true
				},
				'/marketingManage/:id/:release_start_time/:end_time': {
					name: '/couponStatistics',
					component: function(resolve) {
						require(['../../view/operationManage/operation/marketingManage/marketingStatistics.vue'], resolve);
					},
					titleName:'营销管理',
					auth: true
				},
				'/addMarketing': {
					name: '/addMarketing',
					component: function(resolve) {
						require(['../../view/operationManage/operation/marketingManage/addMarketing.vue'], resolve);
					},
					titleName:'添加优惠券',
					auth: true
				},
				/* 营销管理end*/
				/* 资讯管理start*/
				'/informationManage': {
					name: '/informationManage',
					component: function(resolve) {
						require(['../../view/operationManage/operation/informationManage/informationManage.vue'], resolve);
					},
					titleName:'资讯管理',
					auth: true
				},
				/* 资讯管理end*/
				/* 增加资讯start*/
				'/addInformation': {
					name: '/addInformation',
					component: function(resolve) {
						require(['../../view/operationManage/operation/informationManage/addInformation.vue'], resolve);
					},
					titleName:'增加资讯',
					auth: true
				},
				/* 增加资讯end*/
				/* 修改资讯start*/
				'/changeInformation/:id_sn': {
					name: '/changeInformation',
					component: function(resolve) {
						require(['../../view/operationManage/operation/informationManage/changeInformation.vue'], resolve);
					},
					titleName:'修改资讯',
					auth: true
				},
				/* 修改资讯end*/
				/* 查看资讯start*/
				'/seeInformation/:id_sn': {
					name: '/seeInformation',
					component: function(resolve) {
						require(['../../view/operationManage/operation/informationManage/seeInformation.vue'], resolve);
					},
					titleName:'查看资讯',
					auth: true
				},
				/* 查看资讯end*/
				/* 意见管理start*/
				'/opinionManage': {
					name: '/opinionManage',
					component: function(resolve) {
						require(['../../view/operationManage/operation/opinionManage/opinionManage.vue'], resolve);
					},
					titleName:'意见管理',
					auth: true
				},
				'/opinionManage/:id': {
					name: '/feedBackDetail',
					component: function(resolve) {
						require(['../../view/operationManage/operation/opinionManage/feedBackDetail.vue'], resolve);
					},
					titleName:'意见详情',
					auth: true
				},
				/* 意见管理end*/
				/* 公告管理start*/
				'/articleManage': {
					name: '/articleManage',
					component: function(resolve) {
						require(['../../view/operationManage/operation/articleManage/articleManage.vue'], resolve);
					},
					titleName:'公告管理',
					auth: true
				},
				'/addArticle': {//增加公告
					name: '/addArticle',
					component: function(resolve) {
						require(['../../view/operationManage/operation/articleManage/addArticle.vue'], resolve);
					},
					titleName:'增加公告',
					auth: true
				},
				'/seeArticle/:articleId': {//查看公告
					name: '/seeArticle',
					component: function(resolve) {
						require(['../../view/operationManage/operation/articleManage/seeArticle.vue'], resolve);
					},
					titleName:'查看公告',
					auth: true
				},
				'/updateArticle/:articleId': {//修改公告
					name: '/updateArticle',
					component: function(resolve) {
						require(['../../view/operationManage/operation/articleManage/updateArticle.vue'], resolve);
					},
					titleName:'修改公告',
					auth: true
				},
				/* 公告管理end*/
				/* 服务指南管理end*/
				'/serviceClassList': {
                    name: '/serviceClassList',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/serviceInfomation/serviceClassList.vue'], resolve);
                    },
                    titleName:'服务指南分类列表',
                    auth: true
                },
                '/articleList/:sn_id/:sn_name': {
                    name: '/articleList',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/serviceInfomation/articleList.vue'], resolve);
                    },
                    titleName:'文章列表',
                    auth: true
                },
                '/serviceArticleAdd/:id_sn/:name_sn': {
                    name: '/serviceArticleAdd',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/serviceInfomation/articleAdd.vue'], resolve);
                    },
                    titleName:'增加文章',
                    auth: true
                },
                '/serviceArticleView/:id_sn/:name_sn/:acid_sn': {
                    name: '/serviceArticleView',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/serviceInfomation/articleView.vue'], resolve);
                    },
                    titleName:'查看文章',
                    auth: true
                },
                '/serviceArticleEdit/:id_sn/:name_sn/:acid_sn': {
                    name: '/serviceArticleEdit',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/serviceInfomation/articleEdit.vue'], resolve);
                    },
                    titleName:'编辑文章',
                    auth: true
                },
				/* 服务指南管理end*/
				/* 物流管理start*/
                '/logisticsManage': {
                    name: '/logisticsManage',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/logisticsManage/logisticsManage.vue'], resolve);
                    },
                    titleName:'物流管理',
                    auth: true
                },
                '/addLogistics': {
                    name: '/addLogistics',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/logisticsManage/addLogistics.vue'], resolve);
                    },
                    titleName:'新增物流公司',
                    auth: true
                },
                '/modifyLogistics/:id': {
                    name: '/modifyLogistics',
                    component: function(resolve) {
                        require(['../../view/operationManage/operation/logisticsManage/modifyLogistics.vue'], resolve);
                    },
                    titleName:'修改物流公司',
                    auth: true
                },
				/* 物流管理end*/

				/* 账号管理start*/
				'/accountManage': {
					name: '/accountManage',
					component: function(resolve) {
						require(['../../view/operationManage/account/accountManage.vue'], resolve);
					},
					titleName:'账号管理',
					auth: true
				},
				/* 账号管理end*/
				/* 订单管理start*/
				'/orderManage': {
					name: '/orderManage',
					component: function(resolve) {
						require(['../../view/operationManage/order/orderManage.vue'], resolve);
					},
					titleName:'订单管理',
					auth: true
				},
				'/orderDetail/:orderId': {
					name: '/orderDetail',
					component: function(resolve) {
						require(['../../view/operationManage/order/orderDetail.vue'], resolve);
					},
					titleName:'订单详情',
					auth: true
				},
				/* 订单管理end*/
				/* 结算管理start*/
				'/dailySettlementManage': {
					name: '/dailySettlementManage',
					component: function(resolve) {
						require(['../../view/operationManage/order/dailySettlementManage.vue'], resolve);
					},
					titleName:'每日结算',
					auth: true
				},
				'/dailyGatheringManage': {
					name: '/dailyGatheringManage',
					component: function(resolve) {
						require(['../../view/operationManage/order/dailyGatheringManage.vue'], resolve);
					},
					titleName:'每日收款',
					auth: true
				},
				/* 结算管理end*/
				/* 权限设置start*/
				'/permissionSet': {
					name: '/permissionSet',
					component: function(resolve) {
						require(['../../view/operationManage/setup/permissionSet.vue'], resolve);
					},
					titleName:'管理员列表',
					auth: true
				},
                '/permissionAdd': {
                    name: '/permissionAdd',
                    component: function(resolve) {
                        require(['../../view/operationManage/setup/permissionAdd.vue'], resolve);
                    },
                    titleName:'增加管理员',
                    auth: true
                },
                '/permissionEdit/:id/:name': {
                    name: '/permissionEdit',
                    component: function(resolve) {
                        require(['../../view/operationManage/setup/permissionEdit.vue'], resolve);
                    },
                    titleName:'编辑管理员',
                    auth: true
                },
                '/permissionView/:id/:name': {
                    name: '/permissionView',
                    component: function(resolve) {
                        require(['../../view/operationManage/setup/permissionEdit.vue'], resolve);
                    },
                    titleName:'查看管理员',
                    auth: true
                },
				/* 权限设置end*/
				/* 操作日志start*/
				'/operationLog': {
					name: '/operationLog',
					component: function(resolve) {
						require(['../../view/operationManage/setup/operationLog.vue'], resolve);
					},
					titleName:'操作日志',
					auth: true
				},
				/* 操作日志end*/
				/* 审核开店start*/
				'/auditShop': {
					name: '/auditShop/',
					component: function(resolve) {
						require(['../../view/operationManage/store/auditShop.vue'], resolve);
					},
					titleName:'审核开店',
					auth: true,
					subRoutes:{
			            "/:state":{
			            	name: '/auditShop/',
							component: function(resolve) {
								require(['../../view/operationManage/store/auditShop.vue'], resolve);
							},
							titleName:'审核开店',
							auth: true
				        }
					}
				},
				'/auditShopSubmit/:storeId/:isEdit': {
					name: '/auditShopSubmit',
					component: function(resolve) {
						require(['../../view/operationManage/store/auditShopSubmit.vue'], resolve);
					},
					titleName:'审核开店申请',
					auth: true
				},
				/* 审核开店end*/
				/* 资质申请start*/
				'/auditQualification': {
					name: '/auditQualification',
					component: function(resolve) {
						require(['../../view/operationManage/store/auditQualification.vue'], resolve);
					},
					titleName:'资质申请',
					auth: true,
					subRoutes:{

			            "/:reviewState":{

			            	name: '/auditQualification',

							component: function(resolve) {

							require(['../../view/operationManage/store/auditQualification.vue'], resolve);

						},

						titleName:'资质申请',

						auth: true

				        }

					}
				},
				'/auditClassQualification/:storeId': {
					name: '/auditClassQualification',
					component: function(resolve) {
						require(['../../view/operationManage/store/auditClassQualification.vue'], resolve);
					},
					titleName:'分类资质审核',
					auth: true
				},
				'/auditOldQualification/:storeId': {
					name: '/auditOldQualification',
					component: function(resolve) {
						require(['../../view/operationManage/store/auditOldQualification.vue'], resolve);
					},
					titleName:'旧资质换新审核',
					auth: true
				},
				/* 资质申请end*/
				/* 店铺管理start*/
				'/storeManage': {
					name: '/storeManage',
					component: function(resolve) {
						require(['../../view/operationManage/store/storeManage.vue'], resolve);
					},
					titleName:'店铺管理',
					auth: true,
					subRoutes :{
						"/:todayDate" :{
							name: '/storeManage',
							component: function(resolve) {
								require(['../../view/operationManage/store/storeManage.vue'], resolve);
							},
							titleName:'店铺管理',
							auth: true
						},
						"/:startTime/:endTime/:type" :{
							name: '/storeManage',
							component: function(resolve) {
								require(['../../view/operationManage/store/storeManage.vue'], resolve);
							},
							titleName:'店铺管理',
							auth: true
						}
					}
				},
				'/storeDetail/:storeId': {
					name: '/storeDetail',
					component: function(resolve) {
						require(['../../view/operationManage/store/auditShopSubmit.vue'], resolve);
					},
					titleName:'店铺详情',
					auth: true
				},
				'/storeClassEdit/:storeId': {
					name: '/storeClassEdit',
					component: function(resolve) {
						require(['../../view/operationManage/store/editStoreClass.vue'], resolve);
					},
					titleName:'修改经营类目',
					auth: true
				},
				'/businessLicenseManage': {
					name: '/businessLicenseManage',
					component: function(resolve) {
						require(['../../view/operationManage/store/businessLicenseManage.vue'], resolve);
					},
					titleName:'营业执照更换',
					auth: true,
					subRoutes:{
						"/:businessState":{
							name: '/businessLicenseManage',
							component: function(resolve) {
								require(['../../view/operationManage/store/businessLicenseManage.vue'], resolve);
							},
							titleName:'营业执照更换',
							auth: true,
						}
					}

				},
				'/licenseCheck/:storeId': {
					name: '/licenseCheck',
					component: function(resolve) {
						require(['../../view/operationManage/store/licenseCheck.vue'], resolve);
					},
					titleName:'审核营业执照更换',
					auth: true
				},
				/* 店铺管理end*/
				/* 销售属性管理start*/
				'/attributeManage': {
					name: '/attributeManage',
					component: function(resolve) {
						require(['../../view/operationManage/goods/attributeManage.vue'], resolve);
					},
					titleName:'销售属性管理',
					auth: true
				},
				'/addSaleAttr': {//增加销售属性
					name: '/addSaleAttr',
					component: function(resolve) {
						require(['../../view/operationManage/goods/addSaleAttr.vue'], resolve);
					},
					titleName:'增加销售属性',
					auth: true
				},
				/* 销售属性管理end*/
				/* 分类属性设定start*/
				'/classManage': {
					name: '/classManage',
					component: function(resolve) {
						require(['../../view/operationManage/goods/classManage.vue'], resolve);
					},
					titleName:'分类属性设定',
					auth: true
				},
				/* 分类属性设定end*/
				/* 绑定属性start*/
				'/brandProperty': {
					name: '/brandProperty',
					component: function(resolve) {
						require(['../../view/operationManage/goods/brandProperty.vue'], resolve);
					},
					titleName:'绑定属性',
					auth: true
				},
				/* 绑定属性end*/
				/* 改绑属性start*/
				'/reBrandProperty/:id_sn': {
					name: '/reBrandProperty',
					component: function(resolve) {
						require(['../../view/operationManage/goods/reBrandProperty.vue'], resolve);
					},
					titleName:'改绑属性',
					auth: true
				},
				/* 改绑属性end*/
				/* 货源商品审核start*/
				'/checkGoodsManage': {
					name: '/checkGoodsManage',
					component: function(resolve) {
						require(['../../view/operationManage/goods/supplyGoods/checkGoodsManage.vue'], resolve);
					},
					titleName:'在售商品',
					auth: true,
					subRoutes:{
						 "/:authUpdState":{
							name: '/checkGoodsManage',
							component: function(resolve) {
								require(['../../view/operationManage/goods/supplyGoods/checkGoodsManage.vue'], resolve);
							},
							titleName:'在售商品',
							auth: true
						 }
					}
				},
				/* 货源商品详情页*/
				'/checkGoodsManageDetail/:catalogCommonid/:num': {
					name: '/checkGoodsManageDetail',
					component: function(resolve) {
						require(['../../view/operationManage/goods/supplyGoods/checkGoodsManageDetail.vue'], resolve);
					},
					titleName:'货源商品详情页',
					auth: true
				},
				'/reviewSupplyGoods/:catCom/:storeComName': {
					name: '/checkGoodsManage',
					component: function(resolve) {
						require(['../../view/operationManage/goods/supplyGoods/reviewSupplyGoods.vue'], resolve);
					},
					titleName:'货源商品审核申请',
					auth: true
				},
				'/reviewSupplyGoodsManage': {
					name: '/reviewSupplyGoodsManage',
					component: function(resolve) {
						require(['../../view/operationManage/goods/supplyGoods/reviewSupplyGoodsManage.vue'], resolve);
					},
					titleName:'待审核商品',
					auth: true,
					subRoutes:{
						"/:goodsVerify":{
							name: '/reviewSupplyGoodsManage',
							component: function(resolve) {
								require(['../../view/operationManage/goods/supplyGoods/reviewSupplyGoodsManage.vue'], resolve);
							},
							titleName:'待审核商品',
							auth: true
						}
					}
				},
				'/noReviewSupplyGoodsManage': {
					name: '/noReviewSupplyGoodsManage',
					component: function(resolve) {
						require(['../../view/operationManage/goods/supplyGoods/noReviewSupplyGoodsManage.vue'], resolve);
					},
					titleName:' 审核不通过商品',
					auth: true
				},
				/* 货源商品审核end*/
				/* 终端商品审核start*/
				'/channelGoodsManage': {
					name: '/channelGoodsManage',
					component: function(resolve) {
						require(['../../view/operationManage/goods/channelGoodsManage.vue'], resolve);
					},
					titleName:'终端商品审核',
					auth: true
				},
				/* 终端商品审核end*/
				/* 终端商品审核审查start*/
				'/channelGoodsReview/:channel_review/:storeId/:storeName': {
					name: '/channelGoodsReview',
					component: function(resolve) {
						require(['../../view/operationManage/goods/channelGoodsReview.vue'], resolve);
					},
					titleName:'终端商品审核审查',
					auth: true
				},
				/* 终端商品审核审查end*/
				/* 终端商品审核详情start*/
				'/channelGoodsDetail/:channel_detail/:storeId/:storeName': {
					name: '/channelGoodsDetail',
					component: function(resolve) {
						require(['../../view/operationManage/goods/channelGoodsDetail.vue'], resolve);
					},
					titleName:'终端商品审核详情',
					auth: true
				},
				/* 终端商品审核详情end*/
                /* 资质管理start*/
                '/qualifyManage': {
                    name: '/qualifyManage',
                    component: function(resolve) {
                        require(['../../view/operationManage/goods/qualifyManage.vue'], resolve);
                    },
                    titleName:'资质管理',
                    auth: true
                },
                '/qualifyAdd': {
                    name: '/qualifyAdd',
                    component: function(resolve) {
                        require(['../../view/operationManage/goods/qualifyAdd.vue'], resolve);
                    },
                    titleName:'增加资质',
                    auth: true
                },
                '/qualifyEdit/:qId/:qName': {
                    name: '/qualifyEdit',
                    component: function(resolve) {
                        require(['../../view/operationManage/goods/qualifyEdit.vue'], resolve);
                    },
                    titleName:'编辑资质',
                    auth: true
                },
                /* 资质管理end*/
				/* 货源市场统计start*/
				'/supplyMarketMtatistics': {
					name: '/supplyMarketMtatistics',
					component: function(resolve) {
						require(['../../view/operationManage/statistics/supplyMarketMtatistics.vue'], resolve);
					},
					titleName:'货源市场统计',
					auth: true
				},
				/* 货源市场统计end*/
				/* 货源商品需求start*/
				'/supplyGoodsDemand': {
					name: '/supplyGoodsDemand',
					component: function(resolve) {
						require(['../../view/operationManage/statistics/supplyGoodsDemand.vue'], resolve);
					},
					titleName:'货源商品需求',
					auth: true
				},
				/* 货源商品需求end*/
				/* 货主供应能力start*/
				'/shipperSupplyCapacity': {
					name: '/shipperSupplyCapacity',
					component: function(resolve) {
						require(['../../view/operationManage/statistics/shipperSupplyCapacity.vue'], resolve);
					},
					titleName:'货主供应能力',
					auth: true
				},
				/* 货主供应能力end*/
				/* 经销采购能力start*/
				'/distributionProcurementCapabilities': {
					name: '/distributionProcurementCapabilities',
					component: function(resolve) {
						require(['../../view/operationManage/statistics/distributionProcurementCapabilities.vue'], resolve);
					},
					titleName:'经销采购能力',
					auth: true
				}
				/* 经销采购能力end*/
			}
		}
	});
	router.redirect({
		// '*': '/'
	});
}
