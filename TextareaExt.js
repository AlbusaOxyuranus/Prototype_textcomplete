function AdapterDecorator(obj)
{
    Decorator.call(this, obj);
    this._getCaretRelativePosition(){

    }
}

AdapterDecorator.prototype = Object.create(Decorator.prototype);
AdapterDecorator.prototype.constructor = Decorator;