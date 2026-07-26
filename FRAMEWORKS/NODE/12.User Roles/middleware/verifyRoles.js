// So we gonna first declare verifyRoles and its going to accept alot of parameters so we gonna use a rest parameter
console.log('[verifyRoles] module loaded v2', new Date().toISOString());
const verifyRoles = (...allowedRoles) => {
  // After then we must have a middleware function that allows requestAnimationFrame,res,and next
  return (req, res, next) => {
    // #region agent log
    (typeof fetch === 'function' ? fetch('http://127.0.0.1:7343/ingest/918464bf-d148-4416-be38-178ebde3d9b8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'0ac246'},body:JSON.stringify({sessionId:'0ac246',runId:'pre-fix',hypothesisId:'H1',location:'middleware/verifyRoles.js:5',message:'verifyRoles entry',data:{allowedRolesCount:allowedRoles?.length,allowedRolesTypes:Array.isArray(allowedRoles)?allowedRoles.map(r=>typeof r):null,hasReqRoles:!!req?.roles,reqRolesType:typeof req?.roles,isReqRolesArray:Array.isArray(req?.roles),reqRolesLen:Array.isArray(req?.roles)?req.roles.length:null,path:req.originalUrl,method:req.method},timestamp:Date.now()})}) : Promise.resolve()).catch(()=>{});
    // #endregion agent log
    console.log('[verifyRoles] post-fix loaded');
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    console.log(rolesArray);
    console.log(req.roles);
    let result;
    try {
      result = req.roles.some((role) => rolesArray.includes(role));
      // #region agent log
      (typeof fetch === 'function' ? fetch('http://127.0.0.1:7343/ingest/918464bf-d148-4416-be38-178ebde3d9b8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'0ac246'},body:JSON.stringify({sessionId:'0ac246',runId:'post-fix',hypothesisId:'H4',location:'middleware/verifyRoles.js:16',message:'verifyRoles decision',data:{authorized:!!result},timestamp:Date.now()})}) : Promise.resolve()).catch(()=>{});
      // #endregion agent log
    } catch (e) {
      // #region agent log
      (typeof fetch === 'function' ? fetch('http://127.0.0.1:7343/ingest/918464bf-d148-4416-be38-178ebde3d9b8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'0ac246'},body:JSON.stringify({sessionId:'0ac246',runId:'post-fix',hypothesisId:'H1',location:'middleware/verifyRoles.js:21',message:'verifyRoles crash',data:{name:e?.name,message:e?.message},timestamp:Date.now()})}) : Promise.resolve()).catch(()=>{});
      // #endregion agent log
      return next(e);
    }
    //So here we are mapping over roles that are sent from the JWT and they are assigned in the verifyJWT to  request those and we are mapping them comparing them getting true and false results back to the roles array
    if(!result) return res.sendStatus(401); //If there is no result we are going to return 401
    next()
  };
};
//We will know when it runs because we will see the arrays that we are comparing in the console

module.exports = verifyRoles 

// We are going to import it to the employees that has different routes 