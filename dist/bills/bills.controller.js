"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillsController = void 0;
const common_1 = require("@nestjs/common");
const create_bill_dto_1 = require("./dtos/create-bill.dto");
const bills_service_1 = require("./bills.service");
let BillsController = class BillsController {
    constructor(billsService) {
        this.billsService = billsService;
    }
    listBills() {
        return this.billsService.findAll();
    }
    createBill(body) {
        return this.billsService.create(body.content);
    }
    async getBill(id) {
        const message = await this.billsService.findOne(id);
        if (!message) {
            throw new common_1.NotFoundException('Message not found');
        }
        return message;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "listBills", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bill_dto_1.CreateBillDto]),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "createBill", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BillsController.prototype, "getBill", null);
BillsController = __decorate([
    (0, common_1.Controller)('bills'),
    __metadata("design:paramtypes", [bills_service_1.BillsService])
], BillsController);
exports.BillsController = BillsController;
//# sourceMappingURL=bills.controller.js.map