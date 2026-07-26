//So here we gonna first inport JWT and the dotenv
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  // #region agent log
  (typeof fetch === 'function' ? fetch('http://127.0.0.1:7343/ingest/918464bf-d148-4416-be38-178ebde3d9b8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'0ac246'},body:JSON.stringify({sessionId:'0ac246',runId:'pre-fix',hypothesisId:'H2',location:'middleware/verifyJWT.js:6',message:'verifyJWT entry',data:{hasAuthHeader:!!req.headers?.authorization,path:req.originalUrl,method:req.method},timestamp:Date.now()})}) : Promise.resolve()).catch(()=>{});
  // #endregion agent log
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
  // console.log(authHeader); // Bearer token
  
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    // #region agent log
    (typeof fetch === 'function' ? fetch('http://127.0.0.1:7343/ingest/918464bf-d148-4416-be38-178ebde3d9b8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'0ac246'},body:JSON.stringify({sessionId:'0ac246',runId:'pre-fix',hypothesisId:'H2',location:'middleware/verifyJWT.js:14',message:'verifyJWT decoded',data:{hasUserInfo:!!decoded?.UserInfo,rolesType:typeof decoded?.UserInfo?.roles,isRolesArray:Array.isArray(decoded?.UserInfo?.roles),rolesCount:Array.isArray(decoded?.UserInfo?.roles)?decoded.UserInfo.roles.length:null},timestamp:Date.now()})}) : Promise.resolve()).catch(()=>{});
    // #endregion agent log
    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;//Now after we decode the username we also wanna set the roles here
    next();
  });
};
module.exports = verifyJWT; 
 
//After then we create our new middleware