"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BST = void 0;
var AbstractTree_1 = require("./abstract/AbstractTree");
var TreeNode_1 = require("./TreeNode");
var BST = /** @class */ (function (_super) {
    __extends(BST, _super);
    function BST() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = 0;
        return _this;
    }
    BST.prototype.BST = function (objects) {
        for (var i = 0; i < objects.length; i++) {
            this.insert(objects[i]);
        }
    };
    BST.prototype.createNewNode = function (e) {
        return new TreeNode_1.TreeNode(e);
    };
    BST.prototype.insert = function (e) {
        if (this.root == null) {
            this.root = this.createNewNode(e); /*create a new root*/
        }
        else {
            /*locate the parent node*/
            var parent_1 = null;
            var current = this.root;
            while (current != null) {
                if (e.localeCompare(current.element) > 0) {
                    parent_1 = current;
                    current = current.right;
                }
                else
                    return false; /*Duplicate node not inserted*/
            }
            if (e.localeCompare(parent_1.element) < 0)
                parent_1.left = this.createNewNode(e);
            else
                parent_1.right = this.createNewNode(e);
        }
        this.size++;
        return true; /*element inserted successfully*/
    };
    BST.prototype.getSize = function () {
        return this.size;
    };
    BST.prototype._inorder = function (root) {
        if (root == null)
            return;
        this._inorder(root.left);
        console.log(root.element + " ");
        this._inorder(root.right);
    };
    BST.prototype.inorder = function () {
        this._inorder(this.root);
    };
    return BST;
}(AbstractTree_1.AbstractTree));
exports.BST = BST;
