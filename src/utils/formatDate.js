"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueValues = exports.formatDate = void 0;
// src/utils/dateFormatter.ts
const formatDate = (date) => {
    return date.toLocaleDateString();
};
exports.formatDate = formatDate;
// src/utils/arrayUtils.ts
const getUniqueValues = (arr) => {
    return [...new Set(arr)];
};
exports.getUniqueValues = getUniqueValues;
