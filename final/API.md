# 接口文档

## 1. AddressController
### 1.1 后端列表
- **接口地址**：`/address/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `address`：`AddressEntity`，地址实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

### 1.2 前端列表
- **接口地址**：`/address/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `address`：`AddressEntity`，地址实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

### 1.3 列表
- **接口地址**：`/address/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `address`：`AddressEntity`，地址实体
- **响应数据**：
  - `data`：`List<AddressEntity>`，地址列表

### 1.4 查询
- **接口地址**：`/address/query`
- **请求方式**：`GET`
- **请求参数**：
  - `address`：`AddressEntity`，地址实体
- **响应数据**：
  - `data`：`AddressView`，地址视图

### 1.5 后端详情
- **接口地址**：`/address/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，地址ID
- **响应数据**：
  - `data`：`AddressEntity`，地址实体

### 1.6 前端详情
- **接口地址**：`/address/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，地址ID
- **响应数据**：
  - `data`：`AddressEntity`，地址实体

### 1.7 后端保存
- **接口地址**：`/address/save`
- **请求方式**：`POST`
- **请求参数**：
  - `address`：`AddressEntity`，地址实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

### 1.8 前端保存
- **接口地址**：`/address/add`
- **请求方式**：`POST`
- **请求参数**：
  - `address`：`AddressEntity`，地址实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

### 1.9 修改
- **接口地址**：`/address/update`
- **请求方式**：`POST`
- **请求参数**：
  - `address`：`AddressEntity`，地址实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

### 1.10 获取默认地址
- **接口地址**：`/address/default`
- **请求方式**：`GET`
- **请求参数**：
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`AddressEntity`，地址实体

### 1.11 删除
- **接口地址**：`/address/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，地址ID数组
- **响应数据**：无

### 1.12 提醒接口
- **接口地址**：`/address/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

## 2. ChatController
### 2.1 后端列表
- **接口地址**：`/chat/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `chat`：`ChatEntity`，聊天实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

### 2.2 前端列表
- **接口地址**：`/chat/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `chat`：`ChatEntity`，聊天实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

### 2.3 列表
- **接口地址**：`/chat/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `chat`：`ChatEntity`，聊天实体
- **响应数据**：
  - `data`：`List<ChatEntity>`，聊天列表

### 2.4 查询
- **接口地址**：`/chat/query`
- **请求方式**：`GET`
- **请求参数**：
  - `chat`：`ChatEntity`，聊天实体
- **响应数据**：
  - `data`：`ChatView`，聊天视图

### 2.5 后端详情
- **接口地址**：`/chat/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，聊天ID
- **响应数据**：
  - `data`：`ChatEntity`，聊天实体

### 2.6 前端详情
- **接口地址**：`/chat/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，聊天ID
- **响应数据**：
  - `data`：`ChatEntity`，聊天实体

### 2.7 后端保存
- **接口地址**：`/chat/save`
- **请求方式**：`POST`
- **请求参数**：
  - `chat`：`ChatEntity`，聊天实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

### 2.8 前端保存
- **接口地址**：`/chat/add`
- **请求方式**：`POST`
- **请求参数**：
  - `chat`：`ChatEntity`，聊天实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

### 2.9 修改
- **接口地址**：`/chat/update`
- **请求方式**：`POST`
- **请求参数**：
  - `chat`：`ChatEntity`，聊天实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

### 2.10 删除
- **接口地址**：`/chat/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，聊天ID数组
- **响应数据**：无

### 2.11 提醒接口
- **接口地址**：`/chat/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

## 3. ChathelperController
### 3.1 后端列表
- **接口地址**：`/chathelper/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `chathelper`：`ChathelperEntity`，聊天助手实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

### 3.2 前端列表
- **接口地址**：`/chathelper/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `chathelper`：`ChathelperEntity`，聊天助手实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

### 3.3 列表
- **接口地址**：`/chathelper/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `chathelper`：`ChathelperEntity`，聊天助手实体
- **响应数据**：
  - `data`：`List<ChathelperEntity>`，聊天助手列表

### 3.4 查询
- **接口地址**：`/chathelper/query`
- **请求方式**：`GET`
- **请求参数**：
  - `chathelper`：`ChathelperEntity`，聊天助手实体
- **响应数据**：
  - `data`：`ChathelperView`，聊天助手视图

### 3.5 后端详情
- **接口地址**：`/chathelper/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，聊天助手ID
- **响应数据**：
  - `data`：`ChathelperEntity`，聊天助手实体

### 3.6 前端详情
- **接口地址**：`/chathelper/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，聊天助手ID
- **响应数据**：
  - `data`：`ChathelperEntity`，聊天助手实体

### 3.7 后端保存
- **接口地址**：`/chathelper/save`
- **请求方式**：`POST`
- **请求参数**：
  - `chathelper`：`ChathelperEntity`，聊天助手实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

### 3.8 前端保存
- **接口地址**：`/chathelper/add`
- **请求方式**：`POST`
- **请求参数**：
  - `chathelper`：`ChathelperEntity`，聊天助手实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

### 3.9 修改
- **接口地址**：`/chathelper/update`
- **请求方式**：`POST`
- **请求参数**：
  - `chathelper`：`ChathelperEntity`，聊天助手实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

### 3.10 删除
- **接口地址**：`/chathelper/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，聊天助手ID数组
- **响应数据**：无

### 3.11 提醒接口
- **接口地址**：`/chathelper/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

## 4. ConfigController
### 4.1 列表
- **接口地址**：`/config/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `config`：`ConfigEntity`，配置实体
- **响应数据**：
  - `data`：`PageUtils`，分页数据

### 4.2 列表（前端）
- **接口地址**：`/config/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `config`：`ConfigEntity`，配置实体
- **响应数据**：
  - `data`：`PageUtils`，分页数据

### 4.3 信息
- **接口地址**：`/config/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`String`，配置ID
- **响应数据**：
  - `data`：`ConfigEntity`，配置实体

### 4.4 详情
- **接口地址**：`/config/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`String`，配置ID
- **响应数据**：
  - `data`：`ConfigEntity`，配置实体

### 4.5 根据name获取信息
- **接口地址**：`/config/info`
- **请求方式**：`GET`
- **请求参数**：
  - `name`：`String`，配置名称
- **响应数据**：
  - `data`：`ConfigEntity`，配置实体

### 4.6 保存
- **接口地址**：`/config/save`
- **请求方式**：`POST`
- **请求参数**：
  - `config`：`ConfigEntity`，配置实体
- **响应数据**：无

### 4.7 修改
- **接口地址**：`/config/update`
- **请求方式**：`POST`
- **请求参数**：
  - `config`：`ConfigEntity`，配置实体
- **响应数据**：无

### 4.8 删除
- **接口地址**：`/config/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，配置ID数组
- **响应数据**：无

---

# 5. CommonController

## 5.1 获取table表中的column列表(联动接口)

- **接口地址**：`/common/option/{tableName}/{columnName}`
- **请求方式**：`GET`
- **请求参数**：
  - `tableName`：`String`，表名
  - `columnName`：`String`，列名
  - `conditionColumn`：`String`，条件列名（可选）
  - `conditionValue`：`String`，条件列值（可选）
  - `level`：`String`，层级（可选）
  - `parent`：`String`，父级（可选）
- **响应数据**：
  - `data`：`List<String>`，列值列表

## 5.2 根据table中的column获取单条记录

- **接口地址**：`/common/follow/{tableName}/{columnName}`
- **请求方式**：`GET`
- **请求参数**：
  - `tableName`：`String`，表名
  - `columnName`：`String`，列名
  - `columnValue`：`String`，列值
- **响应数据**：
  - `data`：`Map<String, Object>`，记录数据

## 5.3 修改table表的sfsh状态

- **接口地址**：`/common/sh/{tableName}`
- **请求方式**：`POST`
- **请求参数**：
  - `tableName`：`String`，表名
  - `map`：`Map<String, Object>`，状态数据
- **响应数据**：无

## 5.4 获取需要提醒的记录数

- **接口地址**：`/common/remind/{tableName}/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `tableName`：`String`，表名
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
- **响应数据**：
  - `count`：`int`，提醒数量

## 5.5 单列求和

- **接口地址**：`/common/cal/{tableName}/{columnName}`
- **请求方式**：`GET`
- **请求参数**：
  - `tableName`：`String`，表名
  - `columnName`：`String`，列名
- **响应数据**：
  - `sum`：`Number`，求和结果

---

# 6. AboutusController

## 6.1 后端列表

- **接口地址**：`/aboutus/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `aboutus`：`AboutusEntity`，关于我们实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 6.2 前端列表

- **接口地址**：`/aboutus/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `aboutus`：`AboutusEntity`，关于我们实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 6.3 列表

- **接口地址**：`/aboutus/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `aboutus`：`AboutusEntity`，关于我们实体
- **响应数据**：
  - `data`：`List<AboutusEntity>`，关于我们列表

## 6.4 查询

- **接口地址**：`/aboutus/query`
- **请求方式**：`GET`
- **请求参数**：
  - `aboutus`：`AboutusEntity`，关于我们实体
- **响应数据**：
  - `data`：`AboutusView`，关于我们视图

## 6.5 后端详情

- **接口地址**：`/aboutus/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，关于我们记录的ID
- **响应数据**：
  - `data`：`AboutusEntity`，关于我们实体

## 6.6 前端详情

- **接口地址**：`/aboutus/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，关于我们记录的ID
- **响应数据**：
  - `data`：`AboutusEntity`，关于我们实体

## 6.7 后端保存

- **接口地址**：`/aboutus/save`
- **请求方式**：`POST`
- **请求参数**：
  - `aboutus`：`AboutusEntity`，关于我们实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 6.8 前端保存

- **接口地址**：`/aboutus/add`
- **请求方式**：`POST`
- **请求参数**：
  - `aboutus`：`AboutusEntity`，关于我们实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 6.9 修改

- **接口地址**：`/aboutus/update`
- **请求方式**：`POST`
- **请求参数**：
  - `aboutus`：`AboutusEntity`，关于我们实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 6.10 删除

- **接口地址**：`/aboutus/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，关于我们记录的ID数组
- **响应数据**：无

## 6.11 提醒接口

- **接口地址**：`/aboutus/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

---

# 7. BangzhuController

## 7.1 后端列表

- **接口地址**：`/bangzhu/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `bangzhu`：`BangzhuEntity`，帮助实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 7.2 前端列表

- **接口地址**：`/bangzhu/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `bangzhu`：`BangzhuEntity`，帮助实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 7.3 列表

- **接口地址**：`/bangzhu/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `bangzhu`：`BangzhuEntity`，帮助实体
- **响应数据**：
  - `data`：`List<BangzhuEntity>`，帮助列表

## 7.4 查询

- **接口地址**：`/bangzhu/query`
- **请求方式**：`GET`
- **请求参数**：
  - `bangzhu`：`BangzhuEntity`，帮助实体
- **响应数据**：
  - `data`：`BangzhuView`，帮助视图

## 7.5 后端详情

- **接口地址**：`/bangzhu/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，帮助记录的ID
- **响应数据**：
  - `data`：`BangzhuEntity`，帮助实体

## 7.6 前端详情

- **接口地址**：`/bangzhu/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，帮助记录的ID
- **响应数据**：
  - `data`：`BangzhuEntity`，帮助实体

## 7.7 后端保存

- **接口地址**：`/bangzhu/save`
- **请求方式**：`POST`
- **请求参数**：
  - `bangzhu`：`BangzhuEntity`，帮助实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 7.8 前端保存

- **接口地址**：`/bangzhu/add`
- **请求方式**：`POST`
- **请求参数**：
  - `bangzhu`：`BangzhuEntity`，帮助实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 7.9 修改

- **接口地址**：`/bangzhu/update`
- **请求方式**：`POST`
- **请求参数**：
  - `bangzhu`：`BangzhuEntity`，帮助实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 7.10 删除

- **接口地址**：`/bangzhu/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，帮助记录的ID数组
- **响应数据**：无

## 7.11 提醒接口

- **接口地址**：`/bangzhu/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

---

# 8. CartController

## 8.1 后端列表

- **接口地址**：`/cart/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `cart`：`CartEntity`，购物车实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 8.2 前端列表

- **接口地址**：`/cart/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `cart`：`CartEntity`，购物车实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 8.3 列表

- **接口地址**：`/cart/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `cart`：`CartEntity`，购物车实体
- **响应数据**：
  - `data`：`List<CartEntity>`，购物车列表

## 8.4 查询

- **接口地址**：`/cart/query`
- **请求方式**：`GET`
- **请求参数**：
  - `cart`：`CartEntity`，购物车实体
- **响应数据**：
  - `data`：`CartEntity`，购物车实体

## 8.5 后端详情

- **接口地址**：`/cart/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，购物车记录的ID
- **响应数据**：
  - `data`：`CartEntity`，购物车实体

## 8.6 前端详情

- **接口地址**：`/cart/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，购物车记录的ID
- **响应数据**：
  - `data`：`CartEntity`，购物车实体

## 8.7 后端保存

- **接口地址**：`/cart/save`
- **请求方式**：`POST`
- **请求参数**：
  - `cart`：`CartEntity`，购物车实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 8.8 前端保存

- **接口地址**：`/cart/add`
- **请求方式**：`POST`
- **请求参数**：
  - `cart`：`CartEntity`，购物车实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 8.9 修改

- **接口地址**：`/cart/update`
- **请求方式**：`POST`
- **请求参数**：
  - `cart`：`CartEntity`，购物车实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 8.10 删除

- **接口地址**：`/cart/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，购物车记录的ID数组
- **响应数据**：无

## 8.11 提醒接口

- **接口地址**：`/cart/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

---

# 9. DiscussremenshangpinController

## 9.1 后端列表

- **接口地址**：`/discussremenshangpin/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `discussremenshangpin`：`DiscussremenshangpinEntity`，热门商品评论实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 9.2 前端列表

- **接口地址**：`/discussremenshangpin/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `discussremenshangpin`：`DiscussremenshangpinEntity`，热门商品评论实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 9.3 列表

- **接口地址**：`/discussremenshangpin/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `discussremenshangpin`：`DiscussremenshangpinEntity`，热门商品评论实体
- **响应数据**：
  - `data`：`List<DiscussremenshangpinEntity>`，热门商品评论列表

## 9.4 查询

- **接口地址**：`/discussremenshangpin/query`
- **请求方式**：`GET`
- **请求参数**：
  - `discussremenshangpin`：`DiscussremenshangpinEntity`，热门商品评论实体
- **响应数据**：
  - `data`：`DiscussremenshangpinView`，热门商品评论视图

## 9.5 后端详情

- **接口地址**：`/discussremenshangpin/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，热门商品评论的ID
- **响应数据**：
  - `data`：`DiscussremenshangpinEntity`，热门商品评论实体

## 9.6 前端详情

- **接口地址**：`/discussremenshangpin/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，热门商品评论的ID
- **响应数据**：
  - `data`：`DiscussremenshangpinEntity`，热门商品评论实体

## 9.7 后端保存

- **接口地址**：`/discussremenshangpin/save`
- **请求方式**：`POST`
- **请求参数**：
  - `discussremenshangpin`：`DiscussremenshangpinEntity`，热门商品评论实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 9.8 前端保存

- **接口地址**：`/discussremenshangpin/add`
- **请求方式**：`POST`
- **请求参数**：
  - `discussremenshangpin`：`DiscussremenshangpinEntity`，热门商品评论实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 9.9 修改

- **接口地址**：`/discussremenshangpin/update`
- **请求方式**：`POST`
- **请求参数**：
  - `discussremenshangpin`：`DiscussremenshangpinEntity`，热门商品评论实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 9.10 删除

- **接口地址**：`/discussremenshangpin/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，热门商品评论的ID数组
- **响应数据**：无

## 9.11 提醒接口

- **接口地址**：`/discussremenshangpin/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

---

# 10. OrdersController

## 10.1 后端订单列表

- **接口地址**：`/orders/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `orders`：`OrdersEntity`，订单实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 10.2 后端订单详情

- **接口地址**：`/orders/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，订单ID
- **响应数据**：
  - `data`：`OrdersEntity`，订单实体

## 10.3 前端订单列表

- **接口地址**：`/orders/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `orders`：`OrdersEntity`，订单实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 10.4 前端订单详情

- **接口地址**：`/orders/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，订单ID
- **响应数据**：
  - `data`：`OrdersEntity`，订单实体

## 10.5 订单提醒接口

- **接口地址**：`/orders/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

---

# 11. RemenshangpinController

## 11.1 后端热门商品列表

- **接口地址**：`/remenshangpin/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `remenshangpin`：`RemenshangpinEntity`，热门商品实体
  - `pricestart`：`Double`，价格起始值（可选）
  - `priceend`：`Double`，价格结束值（可选）
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 11.2 后端热门商品详情

- **接口地址**：`/remenshangpin/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，热门商品ID
- **响应数据**：
  - `data`：`RemenshangpinEntity`，热门商品实体

## 11.3 前端热门商品列表

- **接口地址**：`/remenshangpin/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `remenshangpin`：`RemenshangpinEntity`，热门商品实体
  - `pricestart`：`Double`，价格起始值（可选）
  - `priceend`：`Double`，价格结束值（可选）
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 11.4 前端热门商品详情

- **接口地址**：`/remenshangpin/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，热门商品ID
- **响应数据**：
  - `data`：`RemenshangpinEntity`，热门商品实体

## 11.5 热门商品提醒接口

- **接口地址**：`/remenshangpin/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

---

# 12. MessagesController

## 12.1 后端消息列表

- **接口地址**：`/messages/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `messages`：`MessagesEntity`，消息实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 12.2 后端消息详情

- **接口地址**：`/messages/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，消息ID
- **响应数据**：
  - `data`：`MessagesEntity`，消息实体

## 12.3 前端消息列表

- **接口地址**：`/messages/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `messages`：`MessagesEntity`，消息实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 12.4 前端消息详情

- **接口地址**：`/messages/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，消息ID
- **响应数据**：
  - `data`：`MessagesEntity`，消息实体

## 12.5 消息提醒接口

- **接口地址**：`/messages/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

---

# 13. ShangjiaController

## 13.1 后端商家列表

- **接口地址**：`/shangjia/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `shangjia`：`ShangjiaEntity`，商家实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 13.2 后端商家详情

- **接口地址**：`/shangjia/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，商家ID
- **响应数据**：
  - `data`：`ShangjiaEntity`，商家实体

## 13.3 前端商家列表

- **接口地址**：`/shangjia/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `shangjia`：`ShangjiaEntity`，商家实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 13.4 前端商家详情

- **接口地址**：`/shangjia/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，商家ID
- **响应数据**：
  - `data`：`ShangjiaEntity`，商家实体

## 13.5 商家提醒接口

- **接口地址**：`/shangjia/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

---

# 14. NewsController

## 14.1 后端新闻列表

- **接口地址**：`/news/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `news`：`NewsEntity`，新闻实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 14.2 后端新闻详情

- **接口地址**：`/news/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，新闻ID
- **响应数据**：
  - `data`：`NewsEntity`，新闻实体

## 14.3 前端新闻列表

- **接口地址**：`/news/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `news`：`NewsEntity`，新闻实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 14.4 前端新闻详情

- **接口地址**：`/news/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，新闻ID
- **响应数据**：
  - `data`：`NewsEntity`，新闻实体

## 14.5 新闻提醒接口

- **接口地址**：`/news/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

# 15. YouqinglianjieController

## 15.1 后端列表

- **接口地址**：`/youqinglianjie/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `youqinglianjie`：`YouqinglianjieEntity`，友情链接实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 15.2 前端列表

- **接口地址**：`/youqinglianjie/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `youqinglianjie`：`YouqinglianjieEntity`，友情链接实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 15.3 列表

- **接口地址**：`/youqinglianjie/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `youqinglianjie`：`YouqinglianjieEntity`，友情链接实体
- **响应数据**：
  - `data`：`List<YouqinglianjieView>`，友情链接视图列表

## 15.4 查询

- **接口地址**：`/youqinglianjie/query`
- **请求方式**：`GET`
- **请求参数**：
  - `youqinglianjie`：`YouqinglianjieEntity`，友情链接实体
- **响应数据**：
  - `data`：`YouqinglianjieView`，友情链接视图

## 15.5 后端详情

- **接口地址**：`/youqinglianjie/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，友情链接ID
- **响应数据**：
  - `data`：`YouqinglianjieEntity`，友情链接实体

## 15.6 前端详情

- **接口地址**：`/youqinglianjie/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，友情链接ID
- **响应数据**：
  - `data`：`YouqinglianjieEntity`，友情链接实体

## 15.7 后端保存

- **接口地址**：`/youqinglianjie/save`
- **请求方式**：`POST`
- **请求参数**：
  - `youqinglianjie`：`YouqinglianjieEntity`，友情链接实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 15.8 前端保存

- **接口地址**：`/youqinglianjie/add`
- **请求方式**：`POST`
- **请求参数**：
  - `youqinglianjie`：`YouqinglianjieEntity`，友情链接实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 15.9 修改

- **接口地址**：`/youqinglianjie/update`
- **请求方式**：`POST`
- **请求参数**：
  - `youqinglianjie`：`YouqinglianjieEntity`，友情链接实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 15.10 删除

- **接口地址**：`/youqinglianjie/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，友情链接ID数组
- **响应数据**：无

## 15.11 提醒接口

- **接口地址**：`/youqinglianjie/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

---

# 16. StoreupController

## 16.1 后端列表

- **接口地址**：`/storeup/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `storeup`：`StoreupEntity`，收藏表实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 16.2 前端列表

- **接口地址**：`/storeup/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `storeup`：`StoreupEntity`，收藏表实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 16.3 列表

- **接口地址**：`/storeup/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `storeup`：`StoreupEntity`，收藏表实体
- **响应数据**：
  - `data`：`List<StoreupView>`，收藏表视图列表

## 16.4 查询

- **接口地址**：`/storeup/query`
- **请求方式**：`GET`
- **请求参数**：
  - `storeup`：`StoreupEntity`，收藏表实体
- **响应数据**：
  - `data`：`StoreupView`，收藏表视图

## 16.5 后端详情

- **接口地址**：`/storeup/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，收藏表ID
- **响应数据**：
  - `data`：`StoreupEntity`，收藏表实体

## 16.6 前端详情

- **接口地址**：`/storeup/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，收藏表ID
- **响应数据**：
  - `data`：`StoreupEntity`，收藏表实体

## 16.7 后端保存

- **接口地址**：`/storeup/save`
- **请求方式**：`POST`
- **请求参数**：
  - `storeup`：`StoreupEntity`，收藏表实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 16.8 前端保存

- **接口地址**：`/storeup/add`
- **请求方式**：`POST`
- **请求参数**：
  - `storeup`：`StoreupEntity`，收藏表实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 16.9 修改

- **接口地址**：`/storeup/update`
- **请求方式**：`POST`
- **请求参数**：
  - `storeup`：`StoreupEntity`，收藏表实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 16.10 删除

- **接口地址**：`/storeup/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，收藏表ID数组
- **响应数据**：无

## 16.11 提醒接口

- **接口地址**：`/storeup/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `count`：`int`，提醒数量

---

# 17. YonghuController

## 17.1 登录

- **接口地址**：`/yonghu/login`
- **请求方式**：`GET`
- **请求参数**：
  - `username`：`String`，用户名
  - `password`：`String`，密码
  - `captcha`：`String`，验证码
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `token`：`String`，令牌

## 17.2 注册

- **接口地址**：`/yonghu/register`
- **请求方式**：`POST`
- **请求参数**：
  - `yonghu`：`YonghuEntity`，用户实体
- **响应数据**：无

## 17.3 退出

- **接口地址**：`/yonghu/logout`
- **请求方式**：`GET`
- **请求参数**：
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 17.4 获取用户的session用户信息

- **接口地址**：`/yonghu/session`
- **请求方式**：`GET`
- **请求参数**：
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`YonghuEntity`，用户实体

## 17.5 密码重置

- **接口地址**：`/yonghu/resetPass`
- **请求方式**：`GET`
- **请求参数**：
  - `username`：`String`，用户名
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 17.6 后端列表

- **接口地址**：`/yonghu/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `yonghu`：`YonghuEntity`，用户实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 17.7 前端列表

- **接口地址**：`/yonghu/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `yonghu`：`YonghuEntity`，用户实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 17.8 列表

- **接口地址**：`/yonghu/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `yonghu`：`YonghuEntity`，用户实体
- **响应数据**：
  - `data`：`List<YonghuView>`，用户视图列表

## 17.9 查询

- **接口地址**：`/yonghu/query`
- **请求方式**：`GET`
- **请求参数**：
  - `yonghu`：`YonghuEntity`，用户实体
- **响应数据**：
  - `data`：`YonghuView`，用户视图

## 17.10 后端详情

- **接口地址**：`/yonghu/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，用户ID
- **响应数据**：
  - `data`：`YonghuEntity`，用户实体

## 17.11 前端详情

- **接口地址**：`/yonghu/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，用户ID
- **响应数据**：
  - `data`：`YonghuEntity`，用户实体

## 17.12 后端保存

- **接口地址**：`/yonghu/save`
- **请求方式**：`POST`
- **请求参数**：
  - `yonghu`：`YonghuEntity`，用户实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 17.13 前端保存

- **接口地址**：`/yonghu/add`
- **请求方式**：`POST`
- **请求参数**：
  - `yonghu`：`YonghuEntity`，用户实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 17.14 修改

- **接口地址**：`/yonghu/update`
- **请求方式**：`POST`
- **请求参数**：
  - `yonghu`：`YonghuEntity`，用户实体
  - `request`：`HttpServletRequest`，请求对象
- **响应数据**：无

## 17.15 删除

- **接口地址**：`/yonghu/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，用户ID数组
- **响应数据**：无

---

# 18. UsersController

## 18.1 登录

- **接口地址**：`/users/login`
- **请求方式**：`GET`
- **请求参数**：
  - `username`：`String`，用户名
  - `password`：`String`，密码
  - `captcha`：`String`，验证码
- **响应数据**：
  - `token`：`String`，令牌

## 18.2 注册

- **接口地址**：`/users/register`
- **请求方式**：`POST`
- **请求参数**：
  - `user`：`UsersEntity`，用户实体
- **响应数据**：无

## 18.3 退出登录

- **接口地址**：`/users/logout`
- **请求方式**：`GET`
- **请求参数**：无
- **响应数据**：无

## 18.4 密码重置

- **接口地址**：`/users/resetPass`
- **请求方式**：`GET`
- **请求参数**：
  - `username`：`String`，用户名
- **响应数据**：无

## 18.5 用户列表（分页）

- **接口地址**：`/users/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `user`：`UsersEntity`，用户实体
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 18.6 用户列表

- **接口地址**：`/users/list`
- **请求方式**：`GET`
- **请求参数**：
  - `user`：`UsersEntity`，用户实体
- **响应数据**：
  - `data`：`List<UsersEntity>`，用户列表

## 18.7 用户信息

- **接口地址**：`/users/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`String`，用户ID
- **响应数据**：
  - `data`：`UsersEntity`，用户实体

## 18.8 获取当前用户信息

- **接口地址**：`/users/session`
- **请求方式**：`GET`
- **请求参数**：无
- **响应数据**：
  - `data`：`UsersEntity`，用户实体

## 18.9 保存用户信息

- **接口地址**：`/users/save`
- **请求方式**：`POST`
- **请求参数**：
  - `user`：`UsersEntity`，用户实体
- **响应数据**：无

## 18.10 修改用户信息

- **接口地址**：`/users/update`
- **请求方式**：`POST`
- **请求参数**：
  - `user`：`UsersEntity`，用户实体
- **响应数据**：无

## 18.11 删除用户

- **接口地址**：`/users/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，用户ID数组
- **响应数据**：无

---

# 19. FileController

## 19.1 上传文件

- **接口地址**：`/file/upload`
- **请求方式**：`POST`
- **请求参数**：
  - `file`：`MultipartFile`，上传的文件
  - `type`：`String`，文件类型
- **响应数据**：
  - `file`：`String`，文件路径

## 19.2 下载文件

- **接口地址**：`/file/download`
- **请求方式**：`GET`
- **请求参数**：
  - `fileName`：`String`，文件名
- **响应数据**：文件字节流

---

# 20. ShangpinfenleiController

## 20.1 后端商品分类列表（分页）

- **接口地址**：`/shangpinfenlei/page`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `shangpinfenlei`：`ShangpinfenleiEntity`，商品分类实体
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 20.2 前端商品分类列表（分页）

- **接口地址**：`/shangpinfenlei/list`
- **请求方式**：`GET`
- **请求参数**：
  - `params`：`Map<String, Object>`，分页及其他查询参数
  - `shangpinfenlei`：`ShangpinfenleiEntity`，商品分类实体
- **响应数据**：
  - `data`：`PageUtils`，分页数据

## 20.3 商品分类列表

- **接口地址**：`/shangpinfenlei/lists`
- **请求方式**：`GET`
- **请求参数**：
  - `shangpinfenlei`：`ShangpinfenleiEntity`，商品分类实体
- **响应数据**：
  - `data`：`List<ShangpinfenleiEntity>`，商品分类列表

## 20.4 查询商品分类

- **接口地址**：`/shangpinfenlei/query`
- **请求方式**：`GET`
- **请求参数**：
  - `shangpinfenlei`：`ShangpinfenleiEntity`，商品分类实体
- **响应数据**：
  - `data`：`ShangpinfenleiEntity`，商品分类实体

## 20.5 后端商品分类详情

- **接口地址**：`/shangpinfenlei/info/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，商品分类ID
- **响应数据**：
  - `data`：`ShangpinfenleiEntity`，商品分类实体

## 20.6 前端商品分类详情

- **接口地址**：`/shangpinfenlei/detail/{id}`
- **请求方式**：`GET`
- **请求参数**：
  - `id`：`Long`，商品分类ID
- **响应数据**：
  - `data`：`ShangpinfenleiEntity`，商品分类实体

## 20.7 后端保存商品分类

- **接口地址**：`/shangpinfenlei/save`
- **请求方式**：`POST`
- **请求参数**：
  - `shangpinfenlei`：`ShangpinfenleiEntity`，商品分类实体
- **响应数据**：无

## 20.8 前端保存商品分类

- **接口地址**：`/shangpinfenlei/add`
- **请求方式**：`POST`
- **请求参数**：
  - `shangpinfenlei`：`ShangpinfenleiEntity`，商品分类实体
- **响应数据**：无

## 20.9 修改商品分类

- **接口地址**：`/shangpinfenlei/update`
- **请求方式**：`POST`
- **请求参数**：
  - `shangpinfenlei`：`ShangpinfenleiEntity`，商品分类实体
- **响应数据**：无

## 20.10 删除商品分类

- **接口地址**：`/shangpinfenlei/delete`
- **请求方式**：`POST`
- **请求参数**：
  - `ids`：`Long[]`，商品分类ID数组
- **响应数据**：无

## 20.11 提醒接口

- **接口地址**：`/shangpinfenlei/remind/{columnName}/{type}`
- **请求方式**：`GET`
- **请求参数**：
  - `columnName`：`String`，列名
  - `type`：`String`，提醒类型
  - `map`：`Map<String, Object>`，查询参数
- **响应数据**：
  - `count`：`int`，提醒数量