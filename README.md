
### 万卡UI组件库文档

> 万卡UI组件库是基于UED部门新出的规范和现有万卡H5的业务抽象出来的一部分组件

#### 组件列表

1. button
2. input
3. pwd-input
4. shadow
5. dialog
6. 密码键盘
7. 短信验证码输入框
8. 底部弹层
9. toast

-

#### 1. button

根据配置的不同的参数 ***[ model, curStyle ]*** 渲染不同颜色，状态，大小的button

model: 模式，根据你配置的模式，调取该模式对应基础样式 (demo图片尺寸缩小一半)
curStyle: 当前按钮的样式，默认normal样式

  1. normal默认模式
  2. disabled 代表当前按钮置灰不可以点击，并且渲染对应的ui
  3. highlight 高亮模式
  4. shadow button会显示阴影

```
  <jf-button
     model="big"
  >标准大按键</jf-button>
```

<img src="http://wxtest.9fbank.com/doc/uiDoc/image/button/normal.jpg" height="44" width="295"/>

```
  <jf-button
     model="big"
     curStyle=['disabled']
  >标准大按键</jf-button>
```

<img src="http://wxtest.9fbank.com/doc/uiDoc/image/button/disable.jpg" height="44" width="295"/>

```
  <jf-button
     model="big"
     curStyle=['highlight']
  >标准大按键</jf-button>
```

<img src="http://wxtest.9fbank.com/doc/uiDoc/image/button/highlight.jpg" height="44" width="295"/>


```
  <jf-button
     model="small"
  >标准大按键</jf-button>
```

<img src="http://wxtest.9fbank.com/doc/uiDoc/image/button/small-normal.jpg" height="32" width="120"/>

```
  <jf-button
     model="small"
     curStyle=['disabled']
  >标准大按键</jf-button>
```

<img src="http://wxtest.9fbank.com/doc/uiDoc/image/button/small-disable.jpg" height="32" width="120"/>

```
  <jf-button
     model="small"
     curStyle=['highlight']
     @click="triggerClick"
  >标准大按键</jf-button>
```

<img src="http://wxtest.9fbank.com/doc/uiDoc/image/button/small-highlight.jpg" height="32" width="120"/>

tips:

1. 如果上面的样式无法满足你的需求，也可以通过自定义样式来覆盖原有的样式
2. button的高度需要父级控制
2. 虽然demo中所有实例只是配置了简单的文案，你也可以自定义一些html元素。button组件会通过slot把html代码渲染对应的位置

```
  <jf-button
     model="small"
     curStyle=['highlight']
     @click="triggerClick"
  >
    <div class="diyStyle">自定义html元素</div>
  </jf-button>
```

###

#### 2. input

对input标签进行了一层封装，input大部分功能都实现了，并且用法都一样。（待完善）

```
  <jf-input
    :type="tel"
    :placeholder="默认提示信息"
    :maxlength="1"
    :disabled="true"
    :readonly="false"
    :checked="true",
    :required="required"
    :value="默认value"
    @input="onInput"
    @change="onChange"
    @keyUp="onkeyUp"
    @keyDown="onkeyDown"
    @forcus="onForcus"
    @blur="onBlur"
  />

```
#### 3. pwd-input

基于input组件新增了两个参数
curForcus：true，在输入框中间显示模拟的红色光标
error：true 底部分割线为红色，一般错误情况显示。默认色值为 #EBEBEB


#### 4. shadow

背景遮罩层

alpha：定义背景颜色的透明度
click: 点击遮罩层触发点击事件

```
  <jf-shadow
    :alpha=".5"
    @click="clickShdow"
  >
     <div>自定义html元素</div>
  </jf-shadow>
  
  methods: {
    clickShdow() {
      console.log('点击遮罩层')
    }
  }
```
***遮罩层内的所有html元素上绑定的事件必须阻止冒泡，请各位知悉***

#### 5. dialog

dialog组件相比以前的组件设计的更加灵活，提供了两种配置方式

<img src="http://wxtest.9fbank.com/doc/uiDoc/image/dialog/two-button.jpg" height="154" width="300"/>

##### 1. 参数
visible: 控制dialog显示还是隐藏的
title: 弹框标题的，默认为空字符串
content：内容区的文案，默认为空字符串
leftBtnText：左侧按钮的文案
rightBtnText：右侧按钮的文案
dialogLeftBtnFn：左侧按钮对应的回调函数
dialogRightBtnFn：右侧按钮对应的回调函数
 
```
  <jf-dialog
    :visible="isShowDialog"
    content="对话框内容对话框内容，对话框内容对话框内容"
    title="提示"
    @dialogLeftBtnFn="dialogLeftBtnFn"
    @dialogRightBtnFn="dialogRightBtnFn"
    leftBtnText="取消"
    rightBtnText="确定"
>
</jf-dialog>

```

##### 2. slot

```
 <jf-dialog
  :visible="isShowDialog"
  @dialogLeftBtnFn="dialogLeftBtnFn"
  @dialogRightBtnFn="dialogRightBtnFn"
  leftBtnText="取消"
  rightBtnText="确定"
 >
    <div slot="header" class="jf-dialog-header">提示</div>
    <div slot="content" class="jf-dialog-content">对话框内容对话框内容，对话框内容对话框内容</div>
    <footer class="jf-dialog-footer flex" slot="footer">
        <button class="jf-btn-cancel cell_1 jf-btn">
        取消
      </button>
      <button class="jf-btn-active cell_1 jf-btn">
        确定
      </button>
    </footer>
 </jf-dialog>
```

slot的模式更加灵活，可以自定义html代码片段，不过需要自行开发对应的样式


tips: 如果只需要一个button，可以只配置一个按钮即可（leftBtnText，rightBtnText 两者任一个）

##### 带关闭按钮

<img src="http://wxtest.9fbank.com/doc/uiDoc/image/dialog/close-btn.jpg" height="432" width="340"/>

```
   <jf-dialog
   :visible="isShowDialog"
   :showClose="true"
    @tapClose="tapClose"
 >
 </jf-dialog>
```

tips: 内容区域高度完全靠内容撑起来，没有最小高度


**上面的几个dialog demo只不过是几个简单的实例，我们可以通过slot模式组装出来各种不同风格的dialog**

#### 6. 密码键盘

<img src="https://wxtest.9fbank.com/doc/uiDoc/image/password/password.jpg" height="179" width="301"/>

```
  <jfPassword
    :visible="isShowSMSValidCode"
    @click="tapKeyBoard"
    @delete="tapDelete"
  />
```

visible: 控制键盘显示隐藏的
click: 点击数字键盘
delete: 点击删除按钮


***tips: 密码键盘不在包含任何和业务有关的代码，点击数字键盘或者删除的时候，都会通知父级组件，所有的业务操作都在父级组件完成***



#### 7. 短信验证码输入框

<img src="https://wxtest.9fbank.com/doc/uiDoc/image/smsInput/smsInput.jpg" height="187" width="226"/>


```
 <jf-sms-verify-code
      :len="4"
      :inputArr="inputArr"
      @close="closeSmsVerif"
      @complete="smsComplete"
      v-if="isShowSMSValidCode"
      :isError="false"
      :isReload="isReload"
      @achieveCode="achieveCode"
  >
    请输入银行预留手机，尾号0978交易验证码
  </jf-sms-verify-code>
```

len: 控制渲染几个input框，对应的是需要输入几位手机验证码，默认为4
inputArr：每个输入框对应的值，一般流程是，用户在数字键盘上点击元素以后，把点击的元素push到inputArr中，然后验证码会把对应的值渲染到对应的位置上
close：点击右上角关闭按钮的时候的回调函数
complete：当输入框都输入完成以后触发该回调函数
isError：当用户输入错误的时候，比如输入完成以后，接口验证用户输入的验证码错误的时候，需要改变改字段的状态
isReload：重新获取验证码的时候改变该字段状态，一般是在调用完发送短信接口以后改变该字段状态（该字段状态不区分true, false只要改变就会重新进去倒计时状态）
time：倒计时时间，默认60s

#### 8. 底部弹层

<img src="https://wxtest.9fbank.com/doc/uiDoc/image/bottomDialog/index.jpg" height="385" width="298"/>

```
  /*
    boxList: [
        {
          id: '内容1',
        },
        {
          id: '内容2',
        },
        {
          id: '内容3',
        },
        {
          id: '内容4',
        },
        {
          id: '内容5',
        },
      ]
    */

  <jf-float-frame
      v-if="isShowJfFloatFrame"
      @click="clickBtn"
      :list="boxList"
      :loopkey="id"
      @clickItem="clickItem"
      tick
      @close="triggerClick('isShowJfFloatFrame')"
  >
  <h1 slot="header">标题</h1>
</jf-float-frame>

```

click：点击底部按钮触发的回调函数
list：需要渲染的数据
showBtn：是否需要显示底部的按钮
loopkey：渲染数据的key (因为目前大部分的数据都是json数组，但是每个数据需要显示的key不尽一样，所以需要在父组件配置)、
tick: 右侧显示图案的样式，此为✅
round：右侧显示图案的样式，此为⭕️
close: 点击右上角的关闭按钮处罚回调函数
clickItem: 点击内容区域每一项触发的回调函数

考虑到内容区域可能样式多种多用，还提供slot模式，开启这种模式以后，所有的样式，事件都交接给了开发自己把控

```
<jf-float-frame
      v-if="isShowJfFloatFrame"
      @click="clickBtn"
      :list="boxList"
      :loopkey="id"
      @clickItem="clickItem"
      tick
      @close="triggerClick('isShowJfFloatFrame')"
  >
  <h1 slot="header">标题</h1>
  <ul slot="loopContent">
    <li class="" v-for="item in boxList">{{item.id}}</li>
  </ul>
</jf-float-frame>
```

#### 9. toast框

<img src="https://wxtest.9fbank.com/doc/uiDoc/image/toast/toast.jpg" height="77" width="300"/>

```
  <jf-toast
      :visible="isShowToast"
      @callBack="toastCallBack"
      :time=1500
   >
     onecard-ui 测试页面
   </jf-toast>
```

time: toast框显示时间，默认1500ms
visible: toast显示隐藏
callBack: toast框倒计时结束以后的回调函数

