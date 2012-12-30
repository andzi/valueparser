(function( window ) {

var location = {};
var _oldLocation = window.location;
window.location = location;

location.noConflict = function() {
	window.location = _oldLocation;
	return location;
};

location.settings = {};
location.settings.north = 'N';
location.settings.east = 'E';
location.settings.south = 'S';
location.settings.west = 'W';
location.settings.dot = '.';
location.settings.latlongcombinator = ', ';
location.settings.degree = '°';
location.settings.minute = '\'';
location.settings.second = '"';
location.settings.precisiontexts = {};
location.settings.precisiontexts.degree = 'to a degree';
location.settings.precisiontexts.minute = 'to an arcminute';
location.settings.precisiontexts.second = 'to an arcsecond';
location.settings.precisiontexts.decisecond = 'to a tenth of an arcsecond';
location.settings.precisiontexts.centisecond = 'to the hundredth of an arcsecond';
location.settings.precisiontexts.milisecond = 'to the thousandth of an arcsecond';
location.settings.precisiontexts.maximal = 'maximal';

var peggeoparser = (function(){
  /*
   * Generated by PEG.js 0.7.0.
   *
   * http://pegjs.majda.cz/
   */
  
  function quote(s) {
    /*
     * ECMA-262, 5th ed., 7.8.4: All characters may appear literally in a
     * string literal except for the closing quote character, backslash,
     * carriage return, line separator, paragraph separator, and line feed.
     * Any character may appear in the form of an escape sequence.
     *
     * For portability, we also escape escape all control and non-ASCII
     * characters. Note that "\0" and "\v" escape sequences are not used
     * because JSHint does not like the first and IE the second.
     */
     return '"' + s
      .replace(/\\/g, '\\\\')  // backslash
      .replace(/"/g, '\\"')    // closing quote character
      .replace(/\x08/g, '\\b') // backspace
      .replace(/\t/g, '\\t')   // horizontal tab
      .replace(/\n/g, '\\n')   // line feed
      .replace(/\f/g, '\\f')   // form feed
      .replace(/\r/g, '\\r')   // carriage return
      .replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g, escape)
      + '"';
  }
  
  var result = {
    /*
     * Parses the input with a generated parser. If the parsing is successfull,
     * returns a value explicitly or implicitly specified by the grammar from
     * which the parser was generated (see |PEG.buildParser|). If the parsing is
     * unsuccessful, throws |PEG.parser.SyntaxError| describing the error.
     */
    parse: function(input, startRule) {
      var parseFunctions = {
        "start": parse_start,
        "val": parse_val,
        "postdot": parse_postdot,
        "integer": parse_integer
      };
      
      if (startRule !== undefined) {
        if (parseFunctions[startRule] === undefined) {
          throw new Error("Invalid rule name: " + quote(startRule) + ".");
        }
      } else {
        startRule = "start";
      }
      
      var pos = 0;
      var reportFailures = 0;
      var rightmostFailuresPos = 0;
      var rightmostFailuresExpected = [];
      
      function padLeft(input, padding, length) {
        var result = input;
        
        var padLength = length - input.length;
        for (var i = 0; i < padLength; i++) {
          result = padding + result;
        }
        
        return result;
      }
      
      function escape(ch) {
        var charCode = ch.charCodeAt(0);
        var escapeChar;
        var length;
        
        if (charCode <= 0xFF) {
          escapeChar = 'x';
          length = 2;
        } else {
          escapeChar = 'u';
          length = 4;
        }
        
        return '\\' + escapeChar + padLeft(charCode.toString(16).toUpperCase(), '0', length);
      }
      
      function matchFailed(failure) {
        if (pos < rightmostFailuresPos) {
          return;
        }
        
        if (pos > rightmostFailuresPos) {
          rightmostFailuresPos = pos;
          rightmostFailuresExpected = [];
        }
        
        rightmostFailuresExpected.push(failure);
      }
      
      function parse_start() {
        var result0, result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, result11;
        var pos0, pos1;
        
        pos0 = pos;
        pos1 = pos;
        result0 = [];
        if (input.charCodeAt(pos) === 32) {
          result1 = " ";
          pos++;
        } else {
          result1 = null;
          if (reportFailures === 0) {
            matchFailed("\" \"");
          }
        }
        while (result1 !== null) {
          result0.push(result1);
          if (input.charCodeAt(pos) === 32) {
            result1 = " ";
            pos++;
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\" \"");
            }
          }
        }
        if (result0 !== null) {
          result1 = parse_val();
          if (result1 !== null) {
            result2 = [];
            if (input.charCodeAt(pos) === 32) {
              result3 = " ";
              pos++;
            } else {
              result3 = null;
              if (reportFailures === 0) {
                matchFailed("\" \"");
              }
            }
            while (result3 !== null) {
              result2.push(result3);
              if (input.charCodeAt(pos) === 32) {
                result3 = " ";
                pos++;
              } else {
                result3 = null;
                if (reportFailures === 0) {
                  matchFailed("\" \"");
                }
              }
            }
            if (result2 !== null) {
              if (input.substr(pos, 1).toUpperCase() === location.settings.north) {
                result3 = input.substr(pos, 1);
                pos++;
              } else {
                result3 = null;
                if (reportFailures === 0) {
                  matchFailed("\"N\"");
                }
              }
              result3 = result3 !== null ? result3 : "";
              if (result3 !== null) {
                if (input.substr(pos, 1).toUpperCase() === location.settings.south) {
                  result4 = input.substr(pos, 1);
                  pos++;
                } else {
                  result4 = null;
                  if (reportFailures === 0) {
                    matchFailed("\"S\"");
                  }
                }
                result4 = result4 !== null ? result4 : "";
                if (result4 !== null) {
                  result5 = [];
                  if (/^[, ]/.test(input.charAt(pos))) {
                    result6 = input.charAt(pos);
                    pos++;
                  } else {
                    result6 = null;
                    if (reportFailures === 0) {
                      matchFailed("[, ]");
                    }
                  }
                  while (result6 !== null) {
                    result5.push(result6);
                    if (/^[, ]/.test(input.charAt(pos))) {
                      result6 = input.charAt(pos);
                      pos++;
                    } else {
                      result6 = null;
                      if (reportFailures === 0) {
                        matchFailed("[, ]");
                      }
                    }
                  }
                  if (result5 !== null) {
                    result6 = parse_val();
                    if (result6 !== null) {
                      result7 = [];
                      if (input.charCodeAt(pos) === 32) {
                        result8 = " ";
                        pos++;
                      } else {
                        result8 = null;
                        if (reportFailures === 0) {
                          matchFailed("\" \"");
                        }
                      }
                      while (result8 !== null) {
                        result7.push(result8);
                        if (input.charCodeAt(pos) === 32) {
                          result8 = " ";
                          pos++;
                        } else {
                          result8 = null;
                          if (reportFailures === 0) {
                            matchFailed("\" \"");
                          }
                        }
                      }
                      if (result7 !== null) {
                        if (input.substr(pos, 1).toUpperCase() === location.settings.east) {
                          result8 = input.substr(pos, 1);
                          pos++;
                        } else {
                          result8 = null;
                          if (reportFailures === 0) {
                            matchFailed("\"E\"");
                          }
                        }
                        result8 = result8 !== null ? result8 : "";
                        if (result8 !== null) {
                          if (input.substr(pos, 1).toUpperCase() === location.settings.west) {
                            result9 = input.substr(pos, 1);
                            pos++;
                          } else {
                            result9 = null;
                            if (reportFailures === 0) {
                              matchFailed("\"W\"");
                            }
                          }
                          result9 = result9 !== null ? result9 : "";
                          if (result9 !== null) {
                            result10 = [];
                            if (input.charCodeAt(pos) === 32) {
                              result11 = " ";
                              pos++;
                            } else {
                              result11 = null;
                              if (reportFailures === 0) {
                                matchFailed("\" \"");
                              }
                            }
                            while (result11 !== null) {
                              result10.push(result11);
                              if (input.charCodeAt(pos) === 32) {
                                result11 = " ";
                                pos++;
                              } else {
                                result11 = null;
                                if (reportFailures === 0) {
                                  matchFailed("\" \"");
                                }
                              }
                            }
                            if (result10 !== null) {
                              result0 = [result0, result1, result2, result3, result4, result5, result6, result7, result8, result9, result10];
                            } else {
                              result0 = null;
                              pos = pos1;
                            }
                          } else {
                            result0 = null;
                            pos = pos1;
                          }
                        } else {
                          result0 = null;
                          pos = pos1;
                        }
                      } else {
                        result0 = null;
                        pos = pos1;
                      }
                    } else {
                      result0 = null;
                      pos = pos1;
                    }
                  } else {
                    result0 = null;
                    pos = pos1;
                  }
                } else {
                  result0 = null;
                  pos = pos1;
                }
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
        } else {
          result0 = null;
          pos = pos1;
        }
        if (result0 !== null) {
          result0 = (function(offset, latitude, north, south, longitude, east, west) { 
              var lat = (south!='')? latitude[0] * -1 : latitude[0];
              var lon = (west!='')? longitude[0] * -1 : longitude[0];
              var acc = Math.min(latitude[1], longitude[1]);
              return [lat, lon, acc];
            })(pos0, result0[1], result0[3], result0[4], result0[6], result0[8], result0[9]);
        }
        if (result0 === null) {
          pos = pos0;
        }
        return result0;
      }
      
      function parse_val() {
        var result0, result1, result2, result3, result4, result5, result6, result7, result8, result9, result10;
        var pos0, pos1;
        
        pos0 = pos;
        pos1 = pos;
        if (/^[+\-]/.test(input.charAt(pos))) {
          result0 = input.charAt(pos);
          pos++;
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("[+\\-]");
          }
        }
        result0 = result0 !== null ? result0 : "";
        if (result0 !== null) {
          result1 = parse_integer();
          if (result1 !== null) {
            if (input.charCodeAt(pos) === 176) {
              result2 = "\xB0";
              pos++;
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\"\\xB0\"");
              }
            }
            result2 = result2 !== null ? result2 : "";
            if (result2 !== null) {
              result3 = [];
              if (input.charCodeAt(pos) === 32) {
                result4 = " ";
                pos++;
              } else {
                result4 = null;
                if (reportFailures === 0) {
                  matchFailed("\" \"");
                }
              }
              while (result4 !== null) {
                result3.push(result4);
                if (input.charCodeAt(pos) === 32) {
                  result4 = " ";
                  pos++;
                } else {
                  result4 = null;
                  if (reportFailures === 0) {
                    matchFailed("\" \"");
                  }
                }
              }
              if (result3 !== null) {
                result4 = parse_integer();
                if (result4 !== null) {
                  if (input.charCodeAt(pos) === 39) {
                    result5 = "'";
                    pos++;
                  } else {
                    result5 = null;
                    if (reportFailures === 0) {
                      matchFailed("\"'\"");
                    }
                  }
                  result5 = result5 !== null ? result5 : "";
                  if (result5 !== null) {
                    result6 = [];
                    if (input.charCodeAt(pos) === 32) {
                      result7 = " ";
                      pos++;
                    } else {
                      result7 = null;
                      if (reportFailures === 0) {
                        matchFailed("\" \"");
                      }
                    }
                    while (result7 !== null) {
                      result6.push(result7);
                      if (input.charCodeAt(pos) === 32) {
                        result7 = " ";
                        pos++;
                      } else {
                        result7 = null;
                        if (reportFailures === 0) {
                          matchFailed("\" \"");
                        }
                      }
                    }
                    if (result6 !== null) {
                      result7 = parse_integer();
                      if (result7 !== null) {
                        result8 = parse_postdot();
                        if (result8 !== null) {
                          result9 = [];
                          if (/^['"]/.test(input.charAt(pos))) {
                            result10 = input.charAt(pos);
                            pos++;
                          } else {
                            result10 = null;
                            if (reportFailures === 0) {
                              matchFailed("['\"]");
                            }
                          }
                          while (result10 !== null) {
                            result9.push(result10);
                            if (/^['"]/.test(input.charAt(pos))) {
                              result10 = input.charAt(pos);
                              pos++;
                            } else {
                              result10 = null;
                              if (reportFailures === 0) {
                                matchFailed("['\"]");
                              }
                            }
                          }
                          if (result9 !== null) {
                            if (input.charCodeAt(pos) === 176) {
                              result10 = "\xB0";
                              pos++;
                            } else {
                              result10 = null;
                              if (reportFailures === 0) {
                                matchFailed("\"\\xB0\"");
                              }
                            }
                            result10 = result10 !== null ? result10 : "";
                            if (result10 !== null) {
                              result0 = [result0, result1, result2, result3, result4, result5, result6, result7, result8, result9, result10];
                            } else {
                              result0 = null;
                              pos = pos1;
                            }
                          } else {
                            result0 = null;
                            pos = pos1;
                          }
                        } else {
                          result0 = null;
                          pos = pos1;
                        }
                      } else {
                        result0 = null;
                        pos = pos1;
                      }
                    } else {
                      result0 = null;
                      pos = pos1;
                    }
                  } else {
                    result0 = null;
                    pos = pos1;
                  }
                } else {
                  result0 = null;
                  pos = pos1;
                }
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
        } else {
          result0 = null;
          pos = pos1;
        }
        if (result0 !== null) {
          result0 = (function(offset, sign, full, min, dotsec, sec, postdot) { 
              var r = full + min/60 + sec/3600;
              var acc = 1;
              if (min>0) acc=1/60;
              if (sec>0) acc=1/3600;
              if (dotsec=='\'') {
                r += (postdot[0]/3600);
                if (postdot[1]>0) acc = (1/3600)/Math.pow(10, postdot[1]);
              } else {
                r += postdot[0];
                if (postdot[1]>0) acc = 1/Math.pow(10, postdot[1]);
              }
              if (sign=='-') r *= -1;
              return [r, acc];
            })(pos0, result0[0], result0[1], result0[4], result0[5], result0[7], result0[8]);
        }
        if (result0 === null) {
          pos = pos0;
        }
        return result0;
      }
      
      function parse_postdot() {
        var result0, result1, result2;
        var pos0, pos1;
        
        pos0 = pos;
        pos1 = pos;
        if (input.charCodeAt(pos) === 46) {
          result0 = ".";
          pos++;
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\".\"");
          }
        }
        result0 = result0 !== null ? result0 : "";
        if (result0 !== null) {
          result1 = [];
          if (/^[0-9]/.test(input.charAt(pos))) {
            result2 = input.charAt(pos);
            pos++;
          } else {
            result2 = null;
            if (reportFailures === 0) {
              matchFailed("[0-9]");
            }
          }
          while (result2 !== null) {
            result1.push(result2);
            if (/^[0-9]/.test(input.charAt(pos))) {
              result2 = input.charAt(pos);
              pos++;
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[0-9]");
              }
            }
          }
          if (result1 !== null) {
            result0 = [result0, result1];
          } else {
            result0 = null;
            pos = pos1;
          }
        } else {
          result0 = null;
          pos = pos1;
        }
        if (result0 !== null) {
          result0 = (function(offset, dot, digits) { 
              if (dot=='') return [0, 0];
              var t = '.' + digits.join('').toString();
              var r = parseFloat(t, 10);
              if (isNaN(r)) return [0, 0];
              var acc = t.length - 1;
              return [r, acc];
            })(pos0, result0[0], result0[1]);
        }
        if (result0 === null) {
          pos = pos0;
        }
        return result0;
      }
      
      function parse_integer() {
        var result0, result1;
        var pos0;
        
        pos0 = pos;
        result0 = [];
        if (/^[0-9]/.test(input.charAt(pos))) {
          result1 = input.charAt(pos);
          pos++;
        } else {
          result1 = null;
          if (reportFailures === 0) {
            matchFailed("[0-9]");
          }
        }
        while (result1 !== null) {
          result0.push(result1);
          if (/^[0-9]/.test(input.charAt(pos))) {
            result1 = input.charAt(pos);
            pos++;
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("[0-9]");
            }
          }
        }
        if (result0 !== null) {
          result0 = (function(offset, digits) {
              var r = parseInt(digits.join(''), 10);
              if (isNaN(r)) return 0;
              return r;
            })(pos0, result0);
        }
        if (result0 === null) {
          pos = pos0;
        }
        return result0;
      }
      
      
      function cleanupExpected(expected) {
        expected.sort();
        
        var lastExpected = null;
        var cleanExpected = [];
        for (var i = 0; i < expected.length; i++) {
          if (expected[i] !== lastExpected) {
            cleanExpected.push(expected[i]);
            lastExpected = expected[i];
          }
        }
        return cleanExpected;
      }
      
      function computeErrorPosition() {
        /*
         * The first idea was to use |String.split| to break the input up to the
         * error position along newlines and derive the line and column from
         * there. However IE's |split| implementation is so broken that it was
         * enough to prevent it.
         */
        
        var line = 1;
        var column = 1;
        var seenCR = false;
        
        for (var i = 0; i < Math.max(pos, rightmostFailuresPos); i++) {
          var ch = input.charAt(i);
          if (ch === "\n") {
            if (!seenCR) { line++; }
            column = 1;
            seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            line++;
            column = 1;
            seenCR = true;
          } else {
            column++;
            seenCR = false;
          }
        }
        
        return { line: line, column: column };
      }
      
      
      var result = parseFunctions[startRule]();
      
      /*
       * The parser is now in one of the following three states:
       *
       * 1. The parser successfully parsed the whole input.
       *
       *    - |result !== null|
       *    - |pos === input.length|
       *    - |rightmostFailuresExpected| may or may not contain something
       *
       * 2. The parser successfully parsed only a part of the input.
       *
       *    - |result !== null|
       *    - |pos < input.length|
       *    - |rightmostFailuresExpected| may or may not contain something
       *
       * 3. The parser did not successfully parse any part of the input.
       *
       *   - |result === null|
       *   - |pos === 0|
       *   - |rightmostFailuresExpected| contains at least one failure
       *
       * All code following this comment (including called functions) must
       * handle these states.
       */
      if (result === null || pos !== input.length) {
        var offset = Math.max(pos, rightmostFailuresPos);
        var found = offset < input.length ? input.charAt(offset) : null;
        var errorPosition = computeErrorPosition();
        
        throw new this.SyntaxError(
          cleanupExpected(rightmostFailuresExpected),
          found,
          offset,
          errorPosition.line,
          errorPosition.column
        );
      }
      
      return result;
    },
    
    /* Returns the parser source code. */
    toSource: function() { return this._source; }
  };
  
  /* Thrown when a parser encounters a syntax error. */
  
  result.SyntaxError = function(expected, found, offset, line, column) {
    function buildMessage(expected, found) {
      var expectedHumanized, foundHumanized;
      
      switch (expected.length) {
        case 0:
          expectedHumanized = "end of input";
          break;
        case 1:
          expectedHumanized = expected[0];
          break;
        default:
          expectedHumanized = expected.slice(0, expected.length - 1).join(", ")
            + " or "
            + expected[expected.length - 1];
      }
      
      foundHumanized = found ? quote(found) : "end of input";
      
      return "Expected " + expectedHumanized + " but " + foundHumanized + " found.";
    }
    
    this.name = "SyntaxError";
    this.expected = expected;
    this.found = found;
    this.message = buildMessage(expected, found);
    this.offset = offset;
    this.line = line;
    this.column = column;
  };
  
  result.SyntaxError.prototype = Error.prototype;
  
  return result;
})();

location.parse = function( text, precision ) {
	var data = {};
	data.input = text;
	var result = {};
	try {
		result = peggeoparser.parse(data.input);
	} catch (err) {
		result = [0, 0, 0];
		data.error = err.toString();
	}

	data.latitude = { 'internal' : result[0]  };
	data.longitude = { 'internal' : result[1] };
	if (precision == undefined) {
		data.precision = { 'internal' : result[2] };
	} else {
		data.precision = { 'internal' : precision };
	}
	
	data.latitude.direction = (data.latitude.internal < 0) ? location.settings.south : location.settings.north;
	data.latitude = location.toDegree(data.latitude, data.precision.internal);
	data.latitude = location.toDecimal(data.latitude, data.precision.internal);

	data.longitude.direction = (data.longitude.internal < 0) ? location.settings.west : location.settings.east;
	data.longitude = location.toDegree(data.longitude, data.precision.internal);
	data.longitude = location.toDecimal(data.longitude, data.precision.internal);

	data.degreetext = data.latitude.degreetext + location.settings.latlongcombinator + data.longitude.degreetext;
	data.decimaltext = data.latitude.decimaltext + location.settings.latlongcombinator + data.longitude.decimaltext;
	data.precision.text = location.precisionText( data.precision.internal );
	data.precision.earthdistance = location.precisionOnEarthInMetric( data.precision.internal );

	return data;
};

location.precisionText = function( acc ) {
	if (Math.abs(acc-1) < 0.0000001) {
		text = location.settings.precisiontexts.degree;
	} else if (Math.abs(acc-1/60) < 0.0000001) {
		text = location.settings.precisiontexts.minute;
	} else if (Math.abs(acc-1/3600) < 0.0000001) {
		text = location.settings.precisiontexts.second;
	} else if (Math.abs(acc-1/36000) < 0.0000001) {
		text = location.settings.precisiontexts.decisecond;
	} else if (Math.abs(acc-1/360000) < 0.0000001) {
		text = location.settings.precisiontexts.centisecond;
	} else if (Math.abs(acc-1/3600000) < 0.0000001) {
		text = location.settings.precisiontexts.milisecond;
	} else if (acc == 0) {
		text = location.settings.precisiontexts.maximal;
	} else {
		if (acc < 9e-10) acc = 1e-9;
		text = '&plusmn;' + acc + location.settings.degree;
	}
	return text;
};

location.precisionOnEarthInMetric = function( acc ) {
	var km = 40000 / 360 * acc;
	if (km > 100) return Math.round(km/100)*100 + " km";
	if (km > 10) return Math.round(km/10)*10 + " km";
	if (km > 1) return Math.round(km) + " km";
	var m = km * 1000;
	if (m > 100) return Math.round(m/100)*100 + " m";
	if (m > 10) return Math.round(m/10)*10 + " m";
	if (m > 1) return Math.round(m) + " m";
	var cm = m * 100;
	if (cm > 10) return Math.round(cm/10)*10 + " cm";
	if (cm > 1) return Math.round(cm) + " cm";
	var mm = cm * 10;
	if (mm > 1) return Math.round(mm) + " mm";
	return "1 mm";
}

location.toDecimal = function(value, precision) {
	if (typeof value === 'number') value = { 'internal' : value };
	var val = Math.abs(value.internal);
	var logacc = Math.floor(Math.log(precision) / Math.LN10);
	if (logacc < -9) logacc = -9;
	value.decimal = Math.round(val*Math.pow(10, -1 * logacc))/Math.pow(10, -1 * logacc);
	var dir = value.direction ? ' ' + value.direction : '';
	value.decimaltext = value.decimal + location.settings.degree + dir;
	return value;
};

location.toDegree = function(value, precision) {
	if (typeof value === 'number') value = { 'internal' : value };
	var val = Math.abs(value.internal);
	value.degree = Math.floor(val+0.00000001);
	if (precision > 0.9999999999) {
		value.minute = undefined;
	} else {
		value.minute = Math.floor((val-value.degree+0.000001)*60);
	}
	if (precision > (0.9999999999/60)) {
		value.second = undefined;
	} else {
		value.second = (val-value.degree-value.minute/60)*3600;
		if (precision > (0.9999999999/3600))
			value.second = Math.round(value.second);
		else if (precision > (0.9999999999/36000))
			value.second = Math.round(value.second*10)/10;
		else if (precision > (0.9999999999/360000))
			value.second = Math.round(value.second*100)/100;
		else
			value.second = Math.round(value.second*1000)/1000;
	}
	var text = function(number, sign) {
		if (number == undefined) return '';
		else return number + sign;
	}
	var dir = value.direction ? ' ' + value.direction : '';
	value.degreetext = text(value.degree, location.settings.degree)
		+ text(value.minute, location.settings.minute)
		+ text(value.second, location.settings.second)
		+ dir;
	return value;
};

var precisionlevels = [10, 1, 0.1, 1/60, 0.01, 1/3600, 0.001, 1/36000, 0.0001, 1/360000, 0.00001, 1/3600000, 0.000001];

location.increasePrecision = function(precision) {
	var index = precisionlevels.indexOf(precision);
	if ((index == precisionlevels.length-1) || (index < 0)) {
		var retval = precision/10;
		if (retval < 1e-9) return 0;
		return retval;
	}
	return precisionlevels[index+1];
};

location.decreasePrecision = function(precision) {
	if (precision == 0) return 1e-9;
	var index = precisionlevels.indexOf(precision);
	if (index == 0) return 180;
	if (index < 0) return Math.min(precision*10, 180);
	return precisionlevels[index-1];
};

})(window);
