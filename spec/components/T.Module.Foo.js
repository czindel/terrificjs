/* Foo */
Foo = function(ctx, sandbox, id) {
	T.Module.call(this, ctx, sandbox, id);
};

Foo.prototype = Object.create(T.Module.prototype);
Foo.prototype.constructor = Foo;

T.Module.Foo = Foo;


/* FooOn */
FooOn = function(ctx, sandbox, id) {
	T.Module.call(this, ctx, sandbox, id);
};

FooOn.prototype = Object.create(T.Module.prototype);
FooOn.prototype.constructor = FooOn;

FooOn.prototype.on = function(callback) {
	callback();
}

T.Module.FooOn = FooOn;


/* FooAfter */
FooAfter = function(ctx, sandbox, id) {
	T.Module.call(this, ctx, sandbox, id);
};

FooAfter.prototype = Object.create(T.Module.prototype);
FooAfter.prototype.constructor = FooAfter;

FooAfter.prototype.after = function() {}

T.Module.FooAfter = FooAfter;


/* FooBoth */
FooBoth = function(ctx, sandbox, id) {
	T.Module.call(this, ctx, sandbox, id);
};

FooBoth.prototype = Object.create(T.Module.prototype);
FooBoth.prototype.constructor = FooBoth;

FooBoth.prototype.on = function(callback) {
	callback();
}
FooBoth.prototype.after = function() {}

T.Module.FooBoth = FooBoth;


// Skins
T.Module.Foo.Bar = function (module) {
	var on = module.on;

	module.on = function (callback) {
		on(callback);
	};

	module.bar = function () {
		return "bar";
	};
};

T.Module.Foo.FooBar = function (module) {
	var on = module.on;

	module.on = function (callback) {
		on(callback);
	};

	module.foobar = function () {
		return "foobar";
	};
};