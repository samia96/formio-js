"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Components_1 = __importDefault(require("../Components"));
const Signature_edit_data_1 = __importDefault(require("./editForm/Signature.edit.data"));
const Signature_edit_display_1 = __importDefault(require("./editForm/Signature.edit.display"));
const Signature_edit_validation_1 = __importDefault(require("./editForm/Signature.edit.validation"));
function default_1(...extend) {
    return Components_1.default.baseEditForm([
        {
            key: 'display',
            components: Signature_edit_display_1.default
        },
        {
            key: 'data',
            components: Signature_edit_data_1.default
        },
        {
            key: 'validation',
            components: Signature_edit_validation_1.default
        },
    ], ...extend);
}
exports.default = default_1;