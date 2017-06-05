function Decorator(obj)
{
    this._obj = obj;
}

Decorator.prototype = Object.create(Adapter.prototype);
Decorator.prototype.constructor = Decorator;