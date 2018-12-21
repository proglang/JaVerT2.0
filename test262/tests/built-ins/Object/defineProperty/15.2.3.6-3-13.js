// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The abtract operation ToPropertyDescriptor  is used to package the
    into a property desc. Step 10 of ToPropertyDescriptor throws a TypeError
    if the property desc ends up having a mix of accessor and data property elements.
es5id: 15.2.3.6-3-13
description: >
    Object.defineProperty throws TypeError if the setter in desc is
    not callable (Null)(8.10.5 step 8.b)
---*/

    var o = {};
    
    // dummy setter
    var setter = null;
    var desc = { set: setter };
assert.throws(TypeError, function() {
      Object.defineProperty(o, "foo", desc);
});
assert.sameValue(o.hasOwnProperty("foo"), false, 'o.hasOwnProperty("foo")');
