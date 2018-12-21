/* @listCopy */
function listCopy (lst) { 
  return (lst === null) ? null : { val: lst.val, prev: lst.prev, next : listCopy(lst.next) }
}

/* @listConcat */
function listConcat(la, lb) {
  if (la === null) return lb; 
  if (lb === null) return la;

  if (la.next === null) { la.next = lb; lb.prev = la; return la }

  la.next = listConcat(la.next, lb);
  return la
}

/** @id listAppend */
function listAppend(lst, v) {
  var newNode = { val: v, prev : null, next : null };
  return (lst === null) ? newNode : listConcat(lst, newNode) 
}

/* Test function */
function isNode(n, val, prev, next) {
  var nv = n.val, np = n.prev, nn = n.next;
  return ((nv === val) && (np == prev) && (nn === next));
}

/* Copy empty list */
var l1 = null;
var cl1 = listCopy(l1);
Assert(cl1 = null);

/* Append to empty list */
var v1 = symb(v1);
var l2 = listAppend(l1, v1);
var in2 = isNode(l2, v1, null, null);
Assert (in2);

/* Copy non-empty list */
var l3 = listCopy(l2);
var in3 = isNode(l3, v1, null, null);
Assert (in3);

/* Append to non-empty list */
var v2 = symb(v2);
var l4 = listAppend(l3, v2);
var in4 = isNode(l4, v1, null, l4.next) && isNode(l4.next, v2, l4, null);
Assert (in4);

/* Concat null and non-empty */
var l5 = listConcat(null, l2);
var in5 = isNode(l5, v1, null, null);
Assert(in5);

/* Concat non-empty and non-empty */
var l6 = listConcat(l5, l3);
var in6 = isNode(l5, v1, null, l5.next) && isNode(l5.next, v1, l5, l5.next.next) && isNode(l5.next.next, v2, l5.next, null)
Assert(in6)
