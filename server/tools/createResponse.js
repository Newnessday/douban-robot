/**
 * @author liugang
 * @date 2018/5/28
 * @description 生成响应体格式
 */

module.exports = options => ({
  status: options.status || 200,
  data: options.data,
  msg: options.msg || '请求成功'
});
