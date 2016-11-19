Feature: Bing搜索 cucumber,selenium 都应该有正确的结果
  为了测试cucumber 多参数
  
  Scenario Outline: 使用bing 来进行搜索
    When 我打开bing在搜索框中输入一个关键词的时候 <关键字>
    Then 我应该可以看到相应的搜索结果

  Examples:
    |  关键字  |
    |selenium  |
    |cucumber  |
