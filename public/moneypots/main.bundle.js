webpackJsonp(
  ["main"],
  {
    /***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
      /***/ function (module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncatched exception popping up in devtools
          return Promise.resolve().then(function () {
            throw new Error("Cannot find module '" + req + "'.");
          });
        }
        webpackEmptyAsyncContext.keys = function () {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id =
          "../../../../../src/$$_lazy_route_resource lazy recursive";

        /***/
      },

    /***/ "../../../../../src/app/app.component.css": /***/ function (
      module,
      exports,
      __webpack_require__
    ) {
      exports = module.exports = __webpack_require__(
        "../../../../css-loader/lib/css-base.js"
      )(false);
      // imports

      // module
      exports.push([module.i, "", ""]);

      // exports

      /*** EXPORTS FROM exports-loader ***/
      module.exports = module.exports.toString();

      /***/
    },

    /***/ "../../../../../src/app/app.component.html": /***/ function (
      module,
      exports
    ) {
      module.exports =
        '<button class="addPot" (click)="addNewPotActive=true">Create Pot</button>\n\n<div class="addPotContainer container" *ngIf=addNewPotActive>\n    <form #form="ngForm" (ngSubmit)="createPot(form)" novalidate>\n      <input type="text" required placeholder="Pot name" name="name" ngModel #potName>\n      <input type="text" required placeholder="Account name" name="accountName" ngModel #accountName>\n      <input type="number" pattern="[0-9]*" placeholder="Target E.G. £1000" min="0" step=".01" name="target" ngModel #target>\n      <div class="iconSelectContainer">\n        <div *ngFor="let icon of icons" [class.active]="icon === userSelectedIcon">\n          <img class="potSelectIcon" [src]="apiUrl + \'images/\' + icon" (click)="selectIcon(icon)"/>\n        </div>\n      </div>\n      <input type="text" class="hidden" id="selectedIcon" name="icon" ngModel #selectedIcon [(ngModel)]="userSelectedIcon">\n      <button type="button" (click)="addNewPotActive=false">Cancel</button>\n      <button type="submit" [disabled]="!form.valid">Create</button>\n    </form>\n  </div>\n\n<pots-list [pots]="pots" [apiUrl]="apiUrl" [icons]="icons" (submitDeposit)="deposit($event)" \n  (submitWithdrawal)="withdraw($event)" (submitSettings)="updateSettings($event)" \n  (submitSettingsConfirm)="changeSettings($event)" (submitDelete)="deletePot($event)" \n  (submitProgress)="updateProgressBar($event)" (submitProgressColor)="changeProgressBarColor($event)"\n  (stateDepositFunds)="depositFunds($event)" (stateWithdrawFunds)="withdrawFunds($event)"\n  (stateReturnToSummary)="returnToSummary($event)" (stateDeleteConfirm)="deleteConfirm($event)"\n  (stateReturnToSettings)="returnToSettings($event)">\n</pots-list>';

      /***/
    },

    /***/ "../../../../../src/app/app.component.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return AppComponent;
        }
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ =
        __webpack_require__("../../../core/esm5/core.js");
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pot_service__ =
        __webpack_require__("../../../../../src/app/pot.service.ts");
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === "object" &&
            typeof Reflect.decorate === "function"
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === "object" &&
            typeof Reflect.metadata === "function"
          )
            return Reflect.metadata(k, v);
        };

      var AppComponent = (function () {
        function AppComponent(potService) {
          this.potService = potService;
          this.apiUrl = "https://moneypots-api.up.railway.app/";
          this.pots = [];
          this.addNewPotActive = false;
          this.userSelectedIcon = "";
          this.icons = [];
        }
        AppComponent.prototype.ngOnInit = function () {
          this.getPots();
          this.getIcons();
        };
        AppComponent.prototype.getPots = function () {
          var _this = this;
          this.potService.getPots().subscribe(function (pots) {
            return (_this.pots = pots);
          });
        };
        AppComponent.prototype.getIcons = function () {
          var _this = this;
          this.potService.getIcons().subscribe(
            function (icons) {
              _this.icons = icons;
            },
            function (err) {}
          );
        };
        AppComponent.prototype.createPot = function (potDetails) {
          var _this = this;
          this.potService.createPot(potDetails).subscribe(function (pots) {
            return (_this.pots = pots);
          });
          this.addNewPotActive = false;
          this.userSelectedIcon = "";
        };
        AppComponent.prototype.deposit = function (data) {
          var _this = this;
          this.potService
            .deposit(data.potDetails, data.depositAmount)
            .subscribe(
              function (pots) {
                _this.pots = pots;
              },
              function (err) {},
              function () {
                _this.updateProgressBar(data.potDetails);
              }
            );
          this.returnToSummary(data.potDetails);
        };
        AppComponent.prototype.withdraw = function (data) {
          var _this = this;
          var potToUpdate = this.getArrayIndex(data.potDetails);
          if (
            this.pots[potToUpdate].balance -
              parseFloat(data.withdrawalAmount) >=
            0
          ) {
            this.potService
              .withdraw(data.potDetails, data.withdrawalAmount)
              .subscribe(
                function (pots) {
                  _this.pots = pots;
                },
                function (err) {},
                function () {
                  _this.updateProgressBar(data.potDetails);
                }
              );
            this.updateProgressBar(data.potDetails);
            this.returnToSummary(data.potDetails);
          } else {
            // User should be prevented from withdrawing more than what is currently in the pot
            this.pots[potToUpdate].preventWithdraw = true;
          }
        };
        AppComponent.prototype.updateSettings = function (potDetails) {
          var _this = this;
          this.returnToSummary(potDetails);
          this.potService.updateSettings(potDetails).subscribe(
            function (pots) {
              _this.pots = pots;
            },
            function (err) {},
            function () {
              _this.updateProgressBar(potDetails);
            }
          );
        };
        AppComponent.prototype.deletePot = function (potDetails) {
          var _this = this;
          this.potService.deletePot(potDetails).subscribe(function (pots) {
            return (_this.pots = pots);
          });
        };
        AppComponent.prototype.updateProgressBar = function (pot) {
          var potToUpdate = this.getArrayIndex(pot);
          // Only update the progress bar if a pot target has been set
          if (this.pots[potToUpdate].target > 0) {
            var self = this;
            var currentPot = this.pots[potToUpdate];
            var startPoint = this.pots[potToUpdate].progress;
            var endPoint;
            var progressBarDirection;
            // Endpoint value is where the progress bar needs to end up
            if (this.pots[potToUpdate].balance == 0) {
              endPoint = 0; // Set the local variable
            } else if (
              this.pots[potToUpdate].balance / this.pots[potToUpdate].target <=
              1
            ) {
              endPoint = Math.round(
                (this.pots[potToUpdate].balance /
                  this.pots[potToUpdate].target) *
                  100
              );
            } else {
              endPoint = 100;
            }
            // Update the pot progress in the array, so we can push it through to the back-end to keep track of
            this.pots[potToUpdate].progress = endPoint;
            this.potService.updateProgress(this.pots[potToUpdate]).subscribe();
            if (endPoint == startPoint) {
              // No deposit or withdrawal has been made, and the pot target has not been changed
              this.changeProgressBarColor(pot);
              return;
            } else if (endPoint > startPoint) {
              // Deposit made, or pot target reduced
              progressBarDirection = "up";
            } else {
              // Withdrawal made, or pot target increased
              progressBarDirection = "down";
              this.changeProgressBarColor(pot);
            }
            // Repeat setInterval until progress bar is in correct position
            var interval = setInterval(function () {
              if (progressBarDirection == "up") {
                startPoint++;
              } else {
                startPoint--;
              }
              currentPot.progress = startPoint;
              if (currentPot.progress == endPoint) {
                clearInterval(interval);
                self.changeProgressBarColor(pot);
              }
            }, 15);
          }
        };
        AppComponent.prototype.changeProgressBarColor = function (pot) {
          var potToUpdate = this.getArrayIndex(pot);
          if (this.pots[potToUpdate].balance >= this.pots[potToUpdate].target) {
            this.pots[potToUpdate].progressBarColor = "#f8c40e";
          } else {
            this.pots[potToUpdate].progressBarColor = "#06b127";
          }
          // Update the pot progress bar colour in the back-end
          this.potService
            .updateProgressBarColor(this.pots[potToUpdate])
            .subscribe();
        };
        // Search the pots array and return the index for the pot object you want to update
        AppComponent.prototype.getArrayIndex = function (pot) {
          var potId = pot._id;
          var potToUpdate = this.pots.findIndex(function (pot) {
            return pot._id === potId;
          });
          return potToUpdate;
        };
        AppComponent.prototype.selectIcon = function (icon) {
          this.userSelectedIcon = icon;
        };
        // State change methods
        AppComponent.prototype.depositFunds = function (pot) {
          var potToUpdate = this.getArrayIndex(pot);
          this.pots[potToUpdate].depositFundsActive = true;
          this.pots[potToUpdate].summaryActive = false;
        };
        AppComponent.prototype.withdrawFunds = function (pot) {
          var potToUpdate = this.getArrayIndex(pot);
          this.pots[potToUpdate].withdrawFundsActive = true;
          this.pots[potToUpdate].summaryActive = false;
        };
        AppComponent.prototype.returnToSummary = function (pot) {
          var potToUpdate = this.getArrayIndex(pot);
          this.pots[potToUpdate].depositFundsActive = false;
          this.pots[potToUpdate].withdrawFundsActive = false;
          this.pots[potToUpdate].settingsActive = false;
          this.pots[potToUpdate].summaryActive = true;
          this.pots[potToUpdate].preventWithdraw = false;
        };
        AppComponent.prototype.changeSettings = function (potDetails) {
          var potToUpdate = this.getArrayIndex(potDetails);
          this.pots[potToUpdate].settingsActive = true;
          this.pots[potToUpdate].summaryActive = false;
        };
        AppComponent.prototype.deleteConfirm = function (pot) {
          var potToUpdate = this.getArrayIndex(pot);
          this.pots[potToUpdate].settingsActive = false;
          this.pots[potToUpdate].deleteActive = true;
        };
        AppComponent.prototype.returnToSettings = function (pot) {
          var potToUpdate = this.getArrayIndex(pot);
          this.pots[potToUpdate].depositFundsActive = false;
          this.pots[potToUpdate].withdrawFundsActive = false;
          this.pots[potToUpdate].settingsActive = true;
          this.pots[potToUpdate].deleteActive = false;
        };
        AppComponent = __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */]
            )({
              selector: "app-root",
              template: __webpack_require__(
                "../../../../../src/app/app.component.html"
              ),
              styles: [
                __webpack_require__("../../../../../src/app/app.component.css"),
              ],
            }),
            __metadata("design:paramtypes", [
              __WEBPACK_IMPORTED_MODULE_1__pot_service__["a" /* PotService */],
            ]),
          ],
          AppComponent
        );
        return AppComponent;
      })();

      /***/
    },

    /***/ "../../../../../src/app/app.module.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return AppModule;
        }
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ =
        __webpack_require__("../../../core/esm5/core.js");
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ =
        __webpack_require__(
          "../../../platform-browser/esm5/platform-browser.js"
        );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ =
        __webpack_require__("../../../forms/esm5/forms.js");
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ =
        __webpack_require__("../../../common/esm5/http.js");
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ =
        __webpack_require__("../../../../../src/app/app.component.ts");
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pot_service__ =
        __webpack_require__("../../../../../src/app/pot.service.ts");
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pots_pot_component__ =
        __webpack_require__("../../../../../src/app/pots/pot.component.ts");
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === "object" &&
            typeof Reflect.decorate === "function"
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };

      var AppModule = (function () {
        function AppModule() {}
        AppModule = __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */]
            )({
              declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__[
                  "a" /* AppComponent */
                ],
                __WEBPACK_IMPORTED_MODULE_6__pots_pot_component__[
                  "a" /* PotComponent */
                ],
              ],
              imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__[
                  "a" /* BrowserModule */
                ],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__[
                  "a" /* FormsModule */
                ],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__[
                  "b" /* HttpClientModule */
                ],
              ],
              providers: [
                __WEBPACK_IMPORTED_MODULE_5__pot_service__[
                  "a" /* PotService */
                ],
              ],
              bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__[
                  "a" /* AppComponent */
                ],
              ],
            }),
          ],
          AppModule
        );
        return AppModule;
      })();

      /***/
    },

    /***/ "../../../../../src/app/pot.service.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return PotService;
        }
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ =
        __webpack_require__("../../../core/esm5/core.js");
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ =
        __webpack_require__("../../../common/esm5/http.js");
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ =
        __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === "object" &&
            typeof Reflect.decorate === "function"
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === "object" &&
            typeof Reflect.metadata === "function"
          )
            return Reflect.metadata(k, v);
        };

      var PotService = (function () {
        function PotService(http) {
          this.http = http;
        }
        PotService.prototype.getPots = function () {
          return this.http.get(
            "https://moneypots-api.up.railway.app/api/pots/getPots"
          );
        };
        PotService.prototype.getIcons = function () {
          return this.http.get(
            "https://moneypots-api.up.railway.app/api/pots/getIcons"
          );
        };
        PotService.prototype.createPot = function (potDetails) {
          return this.http.post(
            "https://moneypots-api.up.railway.app/api/pots/createPot",
            potDetails.value
          );
        };
        PotService.prototype.deletePot = function (potDetails) {
          return this.http.post(
            "https://moneypots-api.up.railway.app/api/pots/deletePot",
            potDetails
          );
        };
        PotService.prototype.deposit = function (potDetails, depositAmount) {
          var body = {
            potDetails: potDetails,
            depositAmount: depositAmount,
          };
          return this.http.post(
            "https://moneypots-api.up.railway.app/api/pots/deposit",
            body
          );
        };
        PotService.prototype.withdraw = function (
          potDetails,
          withdrawalAmount
        ) {
          var body = {
            potDetails: potDetails,
            withdrawalAmount: withdrawalAmount,
          };
          return this.http.post(
            "https://moneypots-api.up.railway.app/api/pots/withdraw",
            body
          );
        };
        PotService.prototype.updateSettings = function (potDetails) {
          return this.http.post(
            "https://moneypots-api.up.railway.app/api/pots/updateSettings",
            potDetails
          );
        };
        PotService.prototype.updateProgress = function (potDetails) {
          return this.http.post(
            "https://moneypots-api.up.railway.app/api/pots/updateProgress",
            potDetails
          );
        };
        PotService.prototype.updateProgressBarColor = function (potDetails) {
          return this.http.post(
            "https://moneypots-api.up.railway.app/api/pots/updateProgressBarColor",
            potDetails
          );
        };
        PotService = __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */]
            )(),
            __metadata("design:paramtypes", [
              __WEBPACK_IMPORTED_MODULE_1__angular_common_http__[
                "a" /* HttpClient */
              ],
            ]),
          ],
          PotService
        );
        return PotService;
      })();

      /***/
    },

    /***/ "../../../../../src/app/pots/pot.component.html": /***/ function (
      module,
      exports
    ) {
      module.exports =
        '\n<div class="pot container" *ngFor="let pot of pots">\n  <div class="summary" *ngIf="pot.summaryActive">\n    <div class="set" (click)="changeSettings(pot)">\n    <button type="button" class="settings fas fa-cog" ></button>\n    </div>\n\n    <div class="iconContainer">\n      <img class="potIcon" [src]="apiUrl + \'images/\' + pot.icon"/>\n    </div>\n\n    <div class="potDetailsContainer">\n      <h2 class="potBalance">{{ pot.balance | currency:\'GBP\' }}<span class="target"> / {{ pot.target | currency:\'GBP\' }}</span></h2>\n      <h3 class="potName">{{ pot.name }}</h3>\n      <h4 class="accountName">{{ pot.accountName }}</h4>\n    </div>\n\n    <div class="progressAndTarget">\n      <div class="progress">\n        <div class="progressBar" id="progressBar" [style.width.%]="pot.progress" [style.background]="pot.progressBarColor"></div>\n      </div>\n    </div>\n\n    <div class="buttonContainer">\n      <button type="button" (click)="depositFunds(pot)">Deposit</button>\n      <button type="button" (click)="withdrawFunds(pot)">Withdraw</button>\n    </div>\n  </div>\n\n  <div class="depositFunds" *ngIf="pot.depositFundsActive">\n    <form #form="ngForm" (ngSubmit)="deposit(pot, depositAmount.value)" novalidate>\n      <input type="number" pattern="[0-9]*" required placeholder="0.00" min="0" step=".01" name="depositAmount" ngModel #depositAmount>\n      <button type="button" (click)="returnToSummary(pot)">Cancel</button>\n      <button type="submit" [disabled]="!form.valid">Deposit</button>\n    </form>\n  </div>\n\n  <div class="withdrawFunds" *ngIf="pot.withdrawFundsActive">\n    <form #form="ngForm" (ngSubmit)="withdraw(pot, withdrawalAmount.value)" novalidate>\n      <h2 class="potBalance">Current Balance {{ pot.balance | currency:\'GBP\' }}</h2>\n      <input type="number" pattern="[0-9]*" required placeholder="0.00" min="0" step=".01" name="withdrawalAmount" ngModel #withdrawalAmount>\n      <button type="button" (click)="returnToSummary(pot)">Cancel</button>\n      <button type="submit" [disabled]="!form.valid">Withdraw</button>\n      <h3 class="preventWithdrawal" *ngIf="pot.preventWithdraw">The most you can withdraw is <span class="bold">{{ pot.balance | currency:\'GBP\' }}</span></h3>\n    </form>\n  </div>\n\n  <div class="potSettings" *ngIf="pot.settingsActive">\n    <form #form="ngForm" (ngSubmit)="updateSettings(pot)" novalidate>\n      <input type="text" required placeholder="Pot name" name="name" ngModel #potName [(ngModel)]="pot.name">\n      <input type="text" required placeholder="Account name" name="accountName" ngModel #accountName [(ngModel)]="pot.accountName">\n      <input type="number" pattern="[0-9]*" placeholder="Target E.G. £1000" min="0" step=".01" name="target" ngModel #target [(ngModel)]="pot.target">\n      <div class="iconSelectContainer">\n        <div *ngFor="let icon of icons" [class.active]="icon === pot.icon" (click)="pot.icon = icon">\n          <img class="potSelectIcon" [src]="apiUrl + \'images/\' + icon"/>\n        </div>\n      </div>\n      <input type="text" class="hidden" id="updatedIcon" name="updatedIcon" ngModel #updatedIcon [(ngModel)]="userUpdatedIcon">\n      <button type="button" (click)="returnToSummary(pot)">Cancel</button>\n      <button type="submit" [disabled]="!form.valid">Update</button>\n      <button type="button" class="delete" (click)="deleteConfirm(pot)">Delete Pot</button>\n    </form>\n  </div>\n\n  <div class="deleteConfirm" *ngIf="pot.deleteActive">\n    <h2>Warning!</h2>\n    <h3>This action cannot be undone. Are you absolutely certain you want to delete this pot?</h3>\n    <form #form="ngForm" (ngSubmit)="deletePot(pot)" novalidate>\n      <button type="button" (click)="returnToSettings(pot)">Cancel</button>\n      <button type="submit" class="delete">Yes, Delete Pot</button>\n    </form>\n  </div>\n</div>\n\n';

      /***/
    },

    /***/ "../../../../../src/app/pots/pot.component.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return PotComponent;
        }
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ =
        __webpack_require__("../../../core/esm5/core.js");
      var __decorate =
        (this && this.__decorate) ||
        function (decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === "object" &&
            typeof Reflect.decorate === "function"
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
      var __metadata =
        (this && this.__metadata) ||
        function (k, v) {
          if (
            typeof Reflect === "object" &&
            typeof Reflect.metadata === "function"
          )
            return Reflect.metadata(k, v);
        };

      var PotComponent = (function () {
        function PotComponent() {
          this.submitDeposit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
            "t" /* EventEmitter */
          ]();
          this.submitWithdrawal =
            new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
              "t" /* EventEmitter */
            ]();
          this.submitSettings = new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
            "t" /* EventEmitter */
          ]();
          this.submitSettingsConfirm =
            new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
              "t" /* EventEmitter */
            ]();
          this.submitDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
            "t" /* EventEmitter */
          ]();
          this.submitProgress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
            "t" /* EventEmitter */
          ]();
          this.submitProgressColor =
            new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
              "t" /* EventEmitter */
            ]();
          this.stateDepositFunds =
            new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
              "t" /* EventEmitter */
            ]();
          this.stateWithdrawFunds =
            new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
              "t" /* EventEmitter */
            ]();
          this.stateReturnToSummary =
            new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
              "t" /* EventEmitter */
            ]();
          this.stateDeleteConfirm =
            new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
              "t" /* EventEmitter */
            ]();
          this.stateReturnToSettings =
            new __WEBPACK_IMPORTED_MODULE_0__angular_core__[
              "t" /* EventEmitter */
            ]();
        }
        PotComponent.prototype.deposit = function (potDetails, depositAmount) {
          var data = { potDetails: potDetails, depositAmount: depositAmount };
          this.submitDeposit.emit(data);
        };
        PotComponent.prototype.withdraw = function (
          potDetails,
          withdrawalAmount
        ) {
          var data = {
            potDetails: potDetails,
            withdrawalAmount: withdrawalAmount,
          };
          this.submitWithdrawal.emit(data);
        };
        PotComponent.prototype.updateSettings = function (potDetails) {
          this.submitSettings.emit(potDetails);
        };
        PotComponent.prototype.deletePot = function (potDetails) {
          this.submitDelete.emit(potDetails);
        };
        PotComponent.prototype.updateProgressBar = function (pot) {
          this.submitProgress.emit(pot);
        };
        PotComponent.prototype.changeProgressBarColor = function (pot) {
          this.submitProgressColor.emit(pot);
        };
        PotComponent.prototype.changeSettings = function (pot) {
          this.submitSettingsConfirm.emit(pot);
        };
        // State change methods
        PotComponent.prototype.depositFunds = function (pot) {
          this.stateDepositFunds.emit(pot);
        };
        PotComponent.prototype.withdrawFunds = function (pot) {
          this.stateWithdrawFunds.emit(pot);
        };
        PotComponent.prototype.returnToSummary = function (pot) {
          this.stateReturnToSummary.emit(pot);
        };
        PotComponent.prototype.deleteConfirm = function (pot) {
          this.stateDeleteConfirm.emit(pot);
        };
        PotComponent.prototype.returnToSettings = function (pot) {
          this.stateReturnToSettings.emit(pot);
        };
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "pots",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "apiUrl",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "icons",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "submitDeposit",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "submitWithdrawal",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "submitSettings",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "submitSettingsConfirm",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "submitDelete",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "submitProgress",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "submitProgressColor",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "stateDepositFunds",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "stateWithdrawFunds",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "stateReturnToSummary",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "stateDeleteConfirm",
          void 0
        );
        __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */]
            )(),
            __metadata("design:type", Object),
          ],
          PotComponent.prototype,
          "stateReturnToSettings",
          void 0
        );
        PotComponent = __decorate(
          [
            Object(
              __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */]
            )({
              selector: "pots-list",
              template: __webpack_require__(
                "../../../../../src/app/pots/pot.component.html"
              ),
            }),
          ],
          PotComponent
        );
        return PotComponent;
      })();

      /***/
    },

    /***/ "../../../../../src/environments/environment.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return environment;
        }
      );
      // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.
      var environment = {
        production: false,
      };

      /***/
    },

    /***/ "../../../../../src/main.ts": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ =
        __webpack_require__("../../../core/esm5/core.js");
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ =
        __webpack_require__(
          "../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js"
        );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ =
        __webpack_require__("../../../../../src/app/app.module.ts");
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ =
        __webpack_require__("../../../../../src/environments/environment.ts");

      if (
        __WEBPACK_IMPORTED_MODULE_3__environments_environment__[
          "a" /* environment */
        ].production
      ) {
        Object(
          __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */]
        )();
      }
      Object(
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__[
          "a" /* platformBrowserDynamic */
        ]
      )()
        .bootstrapModule(
          __WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]
        )
        .catch(function (err) {
          return console.log(err);
        });

      /***/
    },

    /***/ 0: /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__("../../../../../src/main.ts");

      /***/
    },
  },
  [0]
);
//# sourceMappingURL=main.bundle.js.map
