Feature: 使用百度来搜索
  
  Scenario: 百度搜索 cucumber
    When 打开百度搜索 "cucumbers"
    Then 页面显示有搜索结果

  Scenario: 百度搜索 金三胖
    When 百度搜索 "金三胖"
    Then 页面应该显示一下关于金三胖的消息