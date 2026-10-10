// Server-side token validation. Owner mapping is operator configuration, never caller input.
export function createSupabaseReviewAuth({projectUrl,publishableKey,ownerSubject,fetchImpl=fetch}) {
 const url=new URL(projectUrl);
 if(url.protocol!=='https:'||!url.hostname.endsWith('.supabase.co')||url.pathname!=='/'||url.username||url.password||!publishableKey||!ownerSubject)throw new Error('review_auth_configuration_required');
 const authenticate=async context=>{
  const token=context?.accessToken;
  if(typeof token!=='string'||!token||token.length>16384)return null;
  try {
   const response=await fetchImpl(new URL('/auth/v1/user',url),{headers:{apikey:publishableKey,authorization:`Bearer ${token}`},redirect:'error',signal:AbortSignal.timeout(10000)});
   if(!response.ok)return null;
   const user=await response.json();
   if(user.id!==ownerSubject||!user.email_confirmed_at||user.is_anonymous===true)return null;
   return {authenticated:true,actorType:'human',subject:user.id,owner:'Alec Gardner',scopes:['workplace_report_review']};
  }catch{return null}
 };
 const signIn=async({email,password})=>{
  if(typeof email!=='string'||email.length>320||typeof password!=='string'||!password||password.length>4096)throw new Error('sign_in_failed');
  try{
   const response=await fetchImpl(new URL('/auth/v1/token?grant_type=password',url),{method:'POST',headers:{apikey:publishableKey,'content-type':'application/json'},body:JSON.stringify({email,password}),redirect:'error',signal:AbortSignal.timeout(10000)});
   if(!response.ok)throw new Error('sign_in_failed');
   const session=await response.json();
   if(!await authenticate({accessToken:session.access_token}))throw new Error('sign_in_failed');
   if(!Number.isFinite(session.expires_in)||session.expires_in<=0)throw new Error('sign_in_failed');
   return {accessToken:session.access_token,expiresIn:Math.min(session.expires_in,900)};
  }catch{throw new Error('sign_in_failed')}
 };
 return {authenticate,signIn,authenticateRequest:async req=>{const header=req.headers.authorization;return {accessToken:typeof header==='string'&&header.startsWith('Bearer ')?header.slice(7):null}}};
}
