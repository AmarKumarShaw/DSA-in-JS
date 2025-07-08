/**
 * LeetCode 205: Isomorphic Strings
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t,
 * with each character mapping to another character uniquely and consistently.
 */

var isIsomorphic = function(s, t) {
    // If the lengths of both strings are not equal, they can't be isomorphic
    if (s.length !== t.length) return false;

    // mapST will store mapping from s -> t
    let mapST = {};
    // mapTS will store reverse mapping from t -> s
    let mapTS = {};

    // Iterate through each character of both strings
    for (let i = 0; i < s.length; i++) {
        // If s[i] has already been mapped, but not to the current t[i], return false
        if (mapST[s[i]] && mapST[s[i]] !== t[i]) {
            return false;
        }

        // If t[i] has already been mapped, but not to the current s[i], return false
        if (mapTS[t[i]] && mapTS[t[i]] !== s[i]) {
            return false;
        }

        // Store the mapping from s[i] -> t[i] and t[i] -> s[i]
        mapST[s[i]] = t[i];
        mapTS[t[i]] = s[i];
    }

    // If no mismatches were found in the mapping, the strings are isomorphic
    return true;
};
