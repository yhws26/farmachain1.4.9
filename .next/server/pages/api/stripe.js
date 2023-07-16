"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stripe";
exports.ids = ["pages/api/stripe"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/stripe.js":
/*!*****************************!*\
  !*** ./pages/api/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(\"sk_test_51Hqmw9EnylLNWUqjP36GV1DkreuhVt1E4l7L1y7YwhvjES8OylYVpKjpIxTjv1FqKWq81pZWBjycNIJH9n1jfI7800n4seyJCH\");\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    try {\n      const params = {\n        submit_type: 'pay',\n        mode: 'payment',\n        payment_method_types: ['card'],\n        billing_address_collection: 'auto',\n        shipping_options: [{\n          shipping_rate: 'shr_1Kn3IaEnylLNWUqj5rqhg9oV'\n        }],\n        line_items: req.body.map(item => {\n          const img = item.image[0].asset._ref;\n          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/').replace('-webp', '.webp');\n          return {\n            price_data: {\n              currency: 'usd',\n              product_data: {\n                name: item.name,\n                images: [newImage]\n              },\n              unit_amount: item.price * 100\n            },\n            adjustable_quantity: {\n              enabled: true,\n              minimum: 1\n            },\n            quantity: item.quantity\n          };\n        }),\n        success_url: `${req.headers.origin}/success`,\n        cancel_url: `${req.headers.origin}/canceled`\n      }; // Create Checkout Sessions from body params.\n\n      const session = await stripe.checkout.sessions.create(params);\n      res.status(200).json(session);\n    } catch (err) {\n      res.status(err.statusCode || 500).json(err.message);\n    }\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method Not Allowed');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RyaXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELCtDQUFKLENBQVdFLDZHQUFYLENBQWY7QUFFZSxlQUFlRyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsUUFBSTtBQUNGLFlBQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFBQSxXQUFXLEVBQUUsS0FEQTtBQUViQyxRQUFBQSxJQUFJLEVBQUUsU0FGTztBQUdiQyxRQUFBQSxvQkFBb0IsRUFBRSxDQUFDLE1BQUQsQ0FIVDtBQUliQyxRQUFBQSwwQkFBMEIsRUFBRSxNQUpmO0FBS2JDLFFBQUFBLGdCQUFnQixFQUFFLENBQ2hCO0FBQUVDLFVBQUFBLGFBQWEsRUFBRTtBQUFqQixTQURnQixDQUxMO0FBUWJDLFFBQUFBLFVBQVUsRUFBRVYsR0FBRyxDQUFDVyxJQUFKLENBQVNDLEdBQVQsQ0FBY0MsSUFBRCxJQUFVO0FBQ2pDLGdCQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxDQUFXLENBQVgsRUFBY0MsS0FBZCxDQUFvQkMsSUFBaEM7QUFDQSxnQkFBTUMsUUFBUSxHQUFHSixHQUFHLENBQUNLLE9BQUosQ0FBWSxRQUFaLEVBQXNCLG1EQUF0QixFQUEyRUEsT0FBM0UsQ0FBbUYsT0FBbkYsRUFBNEYsT0FBNUYsQ0FBakI7QUFFQSxpQkFBTztBQUNMQyxZQUFBQSxVQUFVLEVBQUU7QUFDVkMsY0FBQUEsUUFBUSxFQUFFLEtBREE7QUFFVkMsY0FBQUEsWUFBWSxFQUFFO0FBQ1pDLGdCQUFBQSxJQUFJLEVBQUVWLElBQUksQ0FBQ1UsSUFEQztBQUVaQyxnQkFBQUEsTUFBTSxFQUFFLENBQUNOLFFBQUQ7QUFGSSxlQUZKO0FBTVZPLGNBQUFBLFdBQVcsRUFBRVosSUFBSSxDQUFDYSxLQUFMLEdBQWE7QUFOaEIsYUFEUDtBQVNMQyxZQUFBQSxtQkFBbUIsRUFBRTtBQUNuQkMsY0FBQUEsT0FBTyxFQUFDLElBRFc7QUFFbkJDLGNBQUFBLE9BQU8sRUFBRTtBQUZVLGFBVGhCO0FBYUxDLFlBQUFBLFFBQVEsRUFBRWpCLElBQUksQ0FBQ2lCO0FBYlYsV0FBUDtBQWVELFNBbkJXLENBUkM7QUE0QmJDLFFBQUFBLFdBQVcsRUFBRyxHQUFFL0IsR0FBRyxDQUFDZ0MsT0FBSixDQUFZQyxNQUFPLFVBNUJ0QjtBQTZCYkMsUUFBQUEsVUFBVSxFQUFHLEdBQUVsQyxHQUFHLENBQUNnQyxPQUFKLENBQVlDLE1BQU87QUE3QnJCLE9BQWYsQ0FERSxDQWlDRjs7QUFDQSxZQUFNRSxPQUFPLEdBQUcsTUFBTXhDLE1BQU0sQ0FBQ3lDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxNQUF6QixDQUFnQ25DLE1BQWhDLENBQXRCO0FBRUFGLE1BQUFBLEdBQUcsQ0FBQ3NDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkwsT0FBckI7QUFDRCxLQXJDRCxDQXFDRSxPQUFPTSxHQUFQLEVBQVk7QUFDWnhDLE1BQUFBLEdBQUcsQ0FBQ3NDLE1BQUosQ0FBV0UsR0FBRyxDQUFDQyxVQUFKLElBQWtCLEdBQTdCLEVBQWtDRixJQUFsQyxDQUF1Q0MsR0FBRyxDQUFDRSxPQUEzQztBQUNEO0FBQ0YsR0F6Q0QsTUF5Q087QUFDTDFDLElBQUFBLEdBQUcsQ0FBQzJDLFNBQUosQ0FBYyxPQUFkLEVBQXVCLE1BQXZCO0FBQ0EzQyxJQUFBQSxHQUFHLENBQUNzQyxNQUFKLENBQVcsR0FBWCxFQUFnQk0sR0FBaEIsQ0FBb0Isb0JBQXBCO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL3BhZ2VzL2FwaS9zdHJpcGUuanM/ZDc4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBzdWJtaXRfdHlwZTogJ3BheScsXG4gICAgICAgIG1vZGU6ICdwYXltZW50JyxcbiAgICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFsnY2FyZCddLFxuICAgICAgICBiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbjogJ2F1dG8nLFxuICAgICAgICBzaGlwcGluZ19vcHRpb25zOiBbXG4gICAgICAgICAgeyBzaGlwcGluZ19yYXRlOiAnc2hyXzFLbjNJYUVueWxMTldVcWo1cnFoZzlvVicgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbGluZV9pdGVtczogcmVxLmJvZHkubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW1nID0gaXRlbS5pbWFnZVswXS5hc3NldC5fcmVmO1xuICAgICAgICAgIGNvbnN0IG5ld0ltYWdlID0gaW1nLnJlcGxhY2UoJ2ltYWdlLScsICdodHRwczovL2Nkbi5zYW5pdHkuaW8vaW1hZ2VzL3ZmeGZ3bmF3L3Byb2R1Y3Rpb24vJykucmVwbGFjZSgnLXdlYnAnLCAnLndlYnAnKTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmljZV9kYXRhOiB7IFxuICAgICAgICAgICAgICBjdXJyZW5jeTogJ3VzZCcsXG4gICAgICAgICAgICAgIHByb2R1Y3RfZGF0YTogeyBcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBbbmV3SW1hZ2VdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGp1c3RhYmxlX3F1YW50aXR5OiB7XG4gICAgICAgICAgICAgIGVuYWJsZWQ6dHJ1ZSxcbiAgICAgICAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHN1Y2Nlc3NfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L3N1Y2Nlc3NgLFxuICAgICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L2NhbmNlbGVkYCxcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIENoZWNrb3V0IFNlc3Npb25zIGZyb20gYm9keSBwYXJhbXMuXG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZShwYXJhbXMpO1xuXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzZXNzaW9uKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBOb3QgQWxsb3dlZCcpO1xuICB9XG59Il0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwYXJhbXMiLCJzdWJtaXRfdHlwZSIsIm1vZGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwic2hpcHBpbmdfb3B0aW9ucyIsInNoaXBwaW5nX3JhdGUiLCJsaW5lX2l0ZW1zIiwiYm9keSIsIm1hcCIsIml0ZW0iLCJpbWciLCJpbWFnZSIsImFzc2V0IiwiX3JlZiIsIm5ld0ltYWdlIiwicmVwbGFjZSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJpbWFnZXMiLCJ1bml0X2Ftb3VudCIsInByaWNlIiwiYWRqdXN0YWJsZV9xdWFudGl0eSIsImVuYWJsZWQiLCJtaW5pbXVtIiwicXVhbnRpdHkiLCJzdWNjZXNzX3VybCIsImhlYWRlcnMiLCJvcmlnaW4iLCJjYW5jZWxfdXJsIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stripe.js"));
module.exports = __webpack_exports__;

})();