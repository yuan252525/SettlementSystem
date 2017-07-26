'use strict'
/*!
 * consts.js v1.0.0
 * 常量列表js，主要是用来存一些常量，避免大家都各自在各个地方定义常量，便于统一管理<br>
 * 缓存的前缀和key需要注意，不能重复，所以，缓存的前缀，大家尽量按照模块名称来取，保证前缀不重复，例如登录的相关信息，前缀都用login
 * key也都在这里统一定义，这样就可以很明确的知道那些名字已经被占用了，已经存在了。
 * Author:
 * Date:
 * 使用方法：
 *        import consts from 'common/consts.js'
 *        consts.INSTANCE_ID
 */
/** **************缓存相关start*************************/
// 登录成功,用户相关信息
// 用户信息
const INSTANCE_ID = 'instance_id'
// 用户信息，不包括权限数据
const USERINFO = 'user_info'
// 权限list，存在loaclstorage里面，因为超过4kb，cookies存不了了
const PERMISSION_LIST = 'permission_list'

const PERMISSION = 'permission'

// 页面是首次加载还是已经点击过来的  一级导航需要用到
const IDENTINDEX = 'identIndex'

// 用户点击的一级导航 唯一值确定
const IDENTIFICATION = 'identification'

// 当前点击的一级菜单
const LEVELMENU = 'levelMenu'

// 当前点击的二级菜单
const SECONDMENU = 'secondMenu'
// 当前点击的三级导航
const THREEMENU = 'ThreeMenu'

// 缓存用户名
const USERNAME = 'username'

// access_token缓存
const ACCESSTOKEN = 'access_token'

// 一级权限缓存
const LEVEL = 'level'

// 二级权限缓存
const SEND = 'send'

const SUPER = 'super'

// 超级管理员
const SUPERADMIN = 'admin'

// 应用名称
const APP_NAME = 'application_name'

const PERMISSIONRELATIONS = {
  beDependent: { // 权限点被哪些权限点依赖
    10301: [
      10302,
      10303,
      10304
    ],
    10401: [
      10402
    ],
    20101: [
      20102,
      20103,
      20104
    ],
    30101: [
      30102,
      30103,
      30104
    ],
    30201: [
      30202,
      30203
    ],
    30301: [
      30302,
      30303
    ],
    30401: [
      30402,
      30403,
      30404
    ],
    30501: [
      30502
    ],
    40101: [
      40102,
      40103,
      40104,
      40105
    ],
    40201: [
      40202,
      40203,
      40204,
      40205
    ],
    40301: [
      40302,
      40303,
      40304,
      40305,
      40306
    ],
    40401: [
      40402,
      40403,
      40404,
      40405
    ],
    40501: [
      40502,
      40503,
      40504,
      40505
    ],
    40601: [
      40602
    ],
    40701: [
      40702,
      40703,
      40704
    ],
    50101: [
      50102
    ],
    50103: [
      50104
    ],
    50105: [
      50106
    ],
    50201: [
      50202,
      50203,
      50204,
      50301,
      50302,
      50303,
      50304
    ],
    50301: [
      50302,
      50303,
      50304
    ],
    50401: [
      50402,
      50403,
      50404,
      50405,
      50406,
      50407
    ],
    50501: [
      50502,
      50503,
      50504
    ],
    50505: [
      50506,
      50507,
      50508
    ],
    50601: [
      50602,
      50603,
      50604
    ],
    50701: [
      50702,
      50703,
      50704
    ],
    50705: [
      50706,
      50707
    ],
    60101: [
      60102,
      60103
    ],
    60201: [
      60202,
      60203,
      60204
    ],
    60205: [
      60206,
      60207
    ],
    60301: [
      60302,
      60303
    ],
    70101: [
      70102
    ],
    70103: [
      70104,
      70105
    ],
    70106: [
      70107
    ],
    70108: [
      70109
    ]
  },
  dependencies: { // 权限点依赖哪些权限点
    10302: [
      10301
    ],
    10303: [
      10301
    ],
    10304: [
      10301
    ],
    10402: [
      10401
    ],
    20102: [
      20101
    ],
    20103: [
      20101
    ],
    20104: [
      20101
    ],
    30102: [
      30101
    ],
    30103: [
      30101
    ],
    30104: [
      30101
    ],
    30202: [
      30201
    ],
    30203: [
      30201
    ],
    30302: [
      30301
    ],
    30303: [
      30301
    ],
    30402: [
      30401
    ],
    30403: [
      30401
    ],
    30404: [
      30401
    ],
    30502: [
      30501
    ],
    40102: [
      40101
    ],
    40103: [
      40101
    ],
    40104: [
      40101
    ],
    40105: [
      40101
    ],
    40202: [
      40201
    ],
    40203: [
      40201
    ],
    40204: [
      40201
    ],
    40205: [
      40201
    ],
    40302: [
      40301
    ],
    40303: [
      40301
    ],
    40304: [
      40301
    ],
    40305: [
      40301
    ],
    40306: [
      40301
    ],
    40402: [
      40401
    ],
    40403: [
      40401
    ],
    40404: [
      40401
    ],
    40405: [
      40401
    ],
    40502: [
      40501
    ],
    40503: [
      40501
    ],
    40504: [
      40501
    ],
    40505: [
      40501
    ],
    40602: [
      40601
    ],
    40702: [
      40701
    ],
    40703: [
      40701
    ],
    40704: [
      40701
    ],
    50102: [
      50101
    ],
    50104: [
      50103
    ],
    50106: [
      50105
    ],
    50202: [
      50201
    ],
    50203: [
      50201
    ],
    50204: [
      50201
    ],
    50301: [
      50201
    ],
    50302: [
      50201,
      50301
    ],
    50303: [
      50201,
      50301
    ],
    50304: [
      50201,
      50301
    ],
    50402: [
      50401
    ],
    50403: [
      50401
    ],
    50404: [
      50401
    ],
    50405: [
      50401
    ],
    50406: [
      50401
    ],
    50407: [
      50401
    ],
    50502: [
      50501
    ],
    50503: [
      50501
    ],
    50504: [
      50501
    ],
    50506: [
      50505
    ],
    50507: [
      50505
    ],
    50508: [
      50505
    ],
    50602: [
      50601
    ],
    50603: [
      50601
    ],
    50604: [
      50601
    ],
    50702: [
      50701
    ],
    50703: [
      50701
    ],
    50704: [
      50701
    ],
    50706: [
      50705
    ],
    50707: [
      50705
    ],
    60102: [
      60101
    ],
    60103: [
      60101
    ],
    60202: [
      60201
    ],
    60203: [
      60201
    ],
    60204: [
      60201
    ],
    60206: [
      60205
    ],
    60207: [
      60205
    ],
    60302: [
      60301
    ],
    60303: [
      60301
    ],
    70102: [
      70101
    ],
    70104: [
      70103
    ],
    70105: [
      70103
    ],
    70107: [
      70106
    ],
    70109: [
      70108
    ]
  }
}

/** **************缓存相关end*************************/

const ERROR_CODE = {
  SUCCESS: '10000', // 成功
  UNKNOWN_ERROR: '20000', // 未知错误
  SIGNATURE_ERROR: '20004', // 签名错误
  SERVICE_NOTEXISTS: '20005', // 404服务不存在
  PARAM_NULL: '20001', // 必填参数为空
  PARAM_TYPE_ERROR: '20006', // 参数类型错误
  PARAM_FORMAT_ERROR: '20007', // 参数格式错误
  PARAM_OVER_ERROR: '20003', // 请求参数数值超出业务范围
  PARAM_NULL_ERROR: '20013', // 请求参数数值超出业务范围
  INTERNAL_SERVER_ERROR: '20008', // 服务器系统异常
  DATA_FORMAT_ERROR: '20009', // 传入的JSON数据格式错误
  PARAM_LENGTH_OVER: '20010', // 参数数据超过允许长度
  INSUFFICIENT_PERMISSIONS: '20011', // 权限不足，无法执行此操作
  INVALID_ORDER: '40001', // 无效的订单
  NOTEXISTS_ORDER: '40002', // 该订单不存在
  MONEY_OVER: '40003', // 支付金额必须小于等于电商系统订单的未支付金额
  ORDER_HASEXISTED: '40004', // 该订单及支付流水已经存在
  ORDER_TIME_OVER: '40005', // 查询订单时间间隔过大
  UPLOAD_IMG_FAIL: '30001', // 上传图片失败
  UPLOAD_FILE_TYPE_ERROR: '30002', // 上传文件格式不整确
  UPLOAD_FILE_ERROR: '30003', // 上传文件失败
  UPLOAD_IMG_NUMBER_OVER: '30004', // 上传图片数量超过限制
  GOODS_COLLECTED: '50001', // 商品已经被关注过
  GOODS_COLLECT_FAIL: '50002', // 商品已关注失败
  CANCEL_COLLECT_FAIL: '50003', // 取消关注失败
  GOODS_INVENTORY_SHORTAGE: '50004', // 该商品库存不足
  GOODS_DELIVERY_AREA_OVER: '40006', // 商品超出配送范围
  NO_GOODS_DETAIL: '80001', // 无商品详情数据
  GOODS_XIAJIA: '80002', // 商品已下架
  GOODS_OVER_UPLINE: '80003', // 商品选购量大于允许购买上限
  // 账户API错误代码
  NO_ACCESS_TOKEN: '61003', // access_token不存在
  NO_SECURITY_ID: '61004', // security_id不存在
  PHONENUM_OCCUPY: '61005', // 手机号已被使用
  ALREADY_EXIST: '61006', // ？已经存在
  SEND_CODE_FAIL: '61007', // 发送短信验证码失败
  INSTANCE_ID_NO_SECURITY_ID: '61011', // instance_id和security_id不匹配
  INSTANCE_ID_NO_ACCESS_TOKEN: '61012', // instance_id和access_token不匹配
  CODE_EXPIRED: '61013', // 短信验证码不正确或已过期
  INNER_ERROR: '61014', // 内部错误
  PROGRAM_ERROR: '61015', // 程序序列错误
  GRAPHICAL_ERROE: '61016', // 图形验证码错误
  CODE_ERROR: '61017', // 短信验证码错误
  UNAUTHORIZED_ACCESS: '61018', // 无权访问
  NO_OBJECT: '61019', // 对象不存在
  USERNAME_OR_PASS_ERRROR: '61020', // 用户名或密码错误
  COMPANY_NAME_EXISTS_ERROR: '120003', // 物流公司名称已存在
  GOODS_BARCODE:'80016',//商品条形码不能重复
  GOODS_SPEC_BARCODE:'80017',//商品规格条形码不能重复
  GOODS_TIME:'80018',//时间必须为当前时间之后
  REQUIRED_TIME:'80019',//时间为必填项,
  GOODS_PENDI_FAIL:'500116'//商品已被其他人审核
}

export default {
  INSTANCE_ID,
  IDENTINDEX,
  IDENTIFICATION,
  LEVELMENU,
  SECONDMENU,
  THREEMENU,
  USERNAME,
  ACCESSTOKEN,
  LEVEL,
  SEND,
  SUPER,
  SUPERADMIN,
  ERROR_CODE,
  APP_NAME,
  USERINFO,
  PERMISSION_LIST,
  PERMISSION,
  PERMISSIONRELATIONS
}
export { INSTANCE_ID, IDENTINDEX, IDENTIFICATION, LEVELMENU, SECONDMENU, THREEMENU, USERNAME, ACCESSTOKEN, LEVEL, SEND, SUPER, SUPERADMIN, ERROR_CODE, APP_NAME, USERINFO, PERMISSIONRELATIONS, PERMISSION_LIST, PERMISSION }
