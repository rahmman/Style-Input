
var app = angular.module('app',[])

.component('smRadio',  {

      restrict: 'E',
      bindings: {

      },

      template: `<div class="container-fluid">
      <div class="row">

      <div class="col-sm-4">

        <h4>Radio Button</h4><br />
        <ul>

       <li>  <input id="rRadio" type="radio" ng-model="radioOff" value="OffNormal" /><label for="rRadio">Off Normal</label>	<div class="bullet"></div> </li>
        <li><input id="gRadio" type="radio" ng-model="radioOff" value="OffHover" /> <label for="gRadio">Off Hover:</label><div class="bullet"></div></li>
      <li>  <input id="bRadio" type="radio" ng-model="radioOff" value="OffFocus" /><label for="bRadio">Off Focus</label>	<div class="bullet"></div></li>
      <div class="opacity">  <li><input id="bRadio" type="radio" ng-model="radioOff" value="OffDisabled" /><label for="bRadio">Off Disabled</label><div class="bullet"></div></li></div>


         </ul>
      </div>
      <div class="col-sm-4">
        <h4><br /></h4><br />
        <ul>
      <li>  <input id="rRadio" type="radio" ng-model="radioOn" value="OffNormal" /><label for="redRadio">ON Normal</label><div class="bullet"></div> </li>
      <li>  <input id="gRadio" type="radio" ng-model="radioOn" value="OffHover" /> <label for="greenRadio">ON Hover:</label><div class="bullet"></div> </li>
        <li><input id="bRadio" type="radio" ng-model="radioOn" value="OffFocus" /><label for="blueRadio">ON Focus</label><div class="bullet"></div> </li>
        <div class="opacity"><li><input id="bRadio" type="radio" ng-model="radioOn" value="OffDisabled" /><label for="bRadio">ON Disabled</label><div class="bullet"></div> </li></div>
 </ul>
      </div>

      <div class="col-sm-4">
        <h4>Sample Layout</h4><br />
          <ul>
        <li> <input id="redRadio" type="radio" ng-model="option" value="Option1" /><label for="rRadio">Option 1</label><div class="bullet"></div> </li>
      <li> <input id="greenRadio" type="radio" ng-model="option" value="Option2" /> <label for="gRadio">Option 2</label><div class="bullet"></div> </li>
        <li> <input id="blueRadio" type="radio" ng-model="option" value="Option3" /><label for="bRadio">Option 3</label><div class="bullet"></div> </li>
        <li> <input id="blueRadio" type="radio" ng-model="option" value="Option4" /><label for="bRadio">Option 4</label><div class="bullet"></div> </li>
        <div class="opacity"><li> <input id="dRadio" type="radio" ng-model="option" value="Option5" /><label for="dRadio">Option 5</label><div class="bullet"></div> </li></div>
</ul>
      </div>
      </div>`


})
.component('checkBoxes',  {

      restrict: 'E',
      bindings: {

      },

      template: `<div class="container-fluid">
      <div class="row">

      <div class="col-sm-4">
        <h4>Check Boxes</h4><br />
        <input id="rcheckBox" type="checkbox" ng-model="OffNormal" value="OffNormal" /><span>Off Normal</span><br />
        <input id="gcheckBox" type="checkbox" ng-model="OffHover" value="OffHover" /> <span>Off Hover:</span><br />
        <input id="bcheckBox" type="checkbox" ng-model="OffFocus" value="OffFocus" /><span>Off Focus</span><br />
        <div class="opacity"><input id="blueRadio" type="checkbox" ng-model="OffDisabled" value="OffDisabled" /><span>Off Disabled</span></div>
      </div>
      <div class="col-sm-4">
        <h4><br /></h4><br />
        <input id="rcheckBox" type="checkbox" ng-model="onNormal" value="OffNormal" /><span>ON Normal</span><br />
        <input id="gcheckBox" type="checkbox" ng-model="onHover" value="OffHover" /> <span>ON Hover:</span><br />
        <input id="bcheckBox" type="checkbox" ng-model="onFocus" value="OffFocus" /><span>ON Focus</span><br />
        <div class="opacity"><input id="blueRadio" type="checkbox" ng-model="onDisabled" value="OffDisabled" /><span>ON Disabled</span></div>
      </div>

      <div class="col-sm-4">
        <h4>Sample Layout</h4><br />
        <input id="rcheckBox" type="checkbox" ng-model="optionA" value="OffNormal" /><span>Option A</span><br />
        <input id="gcheckBox" type="checkbox" ng-model="optionB" value="OffHover" /> <span>Option B</span><br />
        <input id="bcheckBox" type="checkbox" ng-model="optionC" value="OffFocus" /><span>Option C</span><br />
        <input id="fcheckBox" type="checkbox" ng-model="optionD" value="OffDisabled" /><span>Option D</span><br />
        <div class="opacity"><input id="dcheckBox" type="checkbox" ng-model="optionF" value="OffDisabled" /><span>Option F</span></div>
      </div>
      </div>`


}).component('toggleSwitch',  {

      restrict: 'E',
      bindings: {

      },

      template: `<div class="container-fluid">
      <div class="row">

      <div class="col-sm-4">
        <h4>Toggles</h4><br />
        <div class="opacity"><label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label></div>
        <div class="opacity"><label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label></div>
      </div>
      <div class="col-sm-4">
        <h4><br /></h4><br />
        <label class="switch">
          <input type="checkbox" checked>
          <span class="slider round"></span>
        </label><br />
        <label class="switch">
  <input type="checkbox" checked>
  <span class="slider round"></span>
</label>
      </div>

      <div class="col-sm-4">
        <h4>Sample Layout</h4>
        <br>
        <span id="s">Selected Item</span>
        <label class="switch">
          <input type="checkbox" checked>
          <span class="slider round"></span>
        </label><br />
        <span id="U">Unselected Item</span>
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
        <div class="opacity">
        <span id="p">Disabled Item</span>
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
        </div>
      </div>
      </div>`


})
