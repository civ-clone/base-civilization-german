"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const German_1 = require("./German");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'German',
    nation: 'Germany',
    colors: ['#000', '#FC0'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(German_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map