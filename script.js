/* ============ ICONS (inline SVG, line-style) ============ */
const ICONS = {
  menu:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  mail:'<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
  bell:'<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  bolt:'<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  search:'<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  chat:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  link:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  crown:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18l1-9-6 4-4-7-4 7-6-4z"/></svg>',
  users:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  shield:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  gauge:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0-8-8"/><path d="M12 12 16 8"/><path d="M2 12h2"/><path d="M12 2v2"/></svg>',
  db:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
  logs:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>',
  megaphone:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 13z"/><path d="M11.6 16.8A3 3 0 1 1 7 15"/></svg>',
  settings:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  ban:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.9" y1="4.9" x2="19.1" y2="19.1"/></svg>',
  upload:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
};
document.getElementById('menuBtn').innerHTML = ICONS.menu;

/* ============ SUPABASE CLIENT ============ */
const SUPABASE_URL = 'https://lhgniavwhnpamociawoc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_86aJVe8q8EiktmCU4wxjfg_7ZlNT4sz';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
function usernameToEmail(u){ return u.toLowerCase().replace(/[^a-z0-9]/g,'') + '@vortexrp.app'; }

/* ============ STATE ============ */
let DB = { categories: [], forums: [], threads: [], posts: [], users: [], settings: {}, customRoles: [], logs: [] };
let session = { username: null, role: null, id: null };
let view = { screen: 'home' };
let profileMap = {};

const uid = (p='id') => p + '_' + Math.random().toString(36).slice(2,9);
const BASE_RANKS = { guest:0, member:1, verified:10, vip:15, tester:20, helper:30, moderator:50, admin:80, founder:100 };
const ROLE_LABELS = { guest:'Guest', member:'Member', verified:'Verified', vip:'VIP', tester:'Tester', helper:'Helper', moderator:'Moderator', admin:'Administrator', founder:'Founder' };
function rankOf(role){
  if(BASE_RANKS[role]!==undefined) return BASE_RANKS[role];
  const custom = (DB.customRoles||[]).find(r=>r.name===role);
  return custom ? custom.rank : 1;
}
function roleLabel(role){
  if(ROLE_LABELS[role]) return ROLE_LABELS[role];
  const custom = (DB.customRoles||[]).find(r=>r.name===role);
  return custom ? custom.name : role;
}
function myRank(){ return rankOf(session.role); }
function isFounder(){ return session.role==='founder'; }
function isStaff(){ return myRank()>=30; }
function canModerate(){ return myRank()>=50; }
function isAdminLevel(){ return myRank()>=80; }
async function addLog(action){
  try{ await sb.from('activity_logs').insert({ actor_id: session.id, action }); }catch(e){ console.error(e); }
}
const PREFIXES = [
  {v:'', label:'No prefix'},
  {v:'important', label:'Important'},
  {v:'interesting', label:'Interesting'},
  {v:'pending', label:'Pending review'},
  {v:'approved', label:'Approved'},
  {v:'rejected', label:'Rejected'},
  {v:'consideration', label:'On consideration'},
];
const TAG_LABEL = {important:'Important',interesting:'Interesting',pending:'Pending review',approved:'Approved',rejected:'Rejected',consideration:'On consideration'};

/* ============ REAL DATA FETCHING (Supabase) ============ */
async function fetchAllData(){
  const [catsRes, forumsRes, threadsRes, postsRes, profilesRes, settingsRes, rolesRes, logsRes] = await Promise.all([
    sb.from('categories').select('*').order('sort_order'),
    sb.from('forums').select('*').order('sort_order'),
    sb.from('threads').select('*').order('created_at', { ascending:false }),
    sb.from('posts').select('*').order('created_at', { ascending:true }),
    sb.from('profiles').select('*'),
    sb.from('site_settings').select('*').eq('id',1).maybeSingle(),
    sb.from('custom_roles').select('*'),
    sb.from('activity_logs').select('*').order('created_at',{ascending:false}).limit(100),
  ]);

  profileMap = {};
  (profilesRes.data||[]).forEach(p=>profileMap[p.id]=p);

  DB.categories = (catsRes.data||[]).map(c=>({ id:c.id, name:c.name, order:c.sort_order }));
  DB.forums = (forumsRes.data||[]).map(f=>({ id:f.id, catId:f.category_id, parentForumId:f.parent_forum_id, name:f.name, desc:f.description, link:f.is_link, order:f.sort_order }));
  DB.threads = (threadsRes.data||[]).map(t=>({
    id:t.id, forumId:t.forum_id, title:t.title, prefix:t.prefix,
    author: profileMap[t.author_id]?.username || 'deleted-user', authorId:t.author_id,
    pinned:t.pinned, locked:t.locked,
    created:new Date(t.created_at).getTime(), updated:new Date(t.updated_at).getTime()
  }));
  DB.posts = (postsRes.data||[]).map(p=>({
    id:p.id, threadId:p.thread_id,
    author: profileMap[p.author_id]?.username || 'deleted-user',
    authorRole: profileMap[p.author_id]?.role || 'member',
    authorId:p.author_id, text:p.body, created:new Date(p.created_at).getTime()
  }));
  DB.users = (profilesRes.data||[]).map(u=>({ id:u.id, username:u.username, role:u.role, banned:u.banned, joined:new Date(u.joined_at).getTime() }));
  DB.settings = settingsRes.data ? { siteName:settingsRes.data.site_name, tagline:settingsRes.data.tagline, logoDataUrl:settingsRes.data.logo_url } : { siteName:'VORTEX RP', tagline:'' };
  DB.customRoles = (rolesRes.data||[]).map(r=>({ name:r.name, rank:r.rank }));
  DB.logs = (logsRes.data||[]).map(l=>({ id:l.id, action:l.action, actor: profileMap[l.actor_id]?.username || 'system', time:new Date(l.created_at).getTime() }));
}

async function restoreSession(){
  const { data: { session: authSession } } = await sb.auth.getSession();
  if(!authSession) return;
  const { data: profile } = await sb.from('profiles').select('*').eq('id', authSession.user.id).maybeSingle();
  if(profile && !profile.banned){
    session = { username: profile.username, role: profile.role, id: profile.id };
  }
}

function go(screen, params={}){ view = { screen, ...params }; closeAccountPanel(); render(); }
function toggleDrawer(open){
  document.getElementById('drawer').classList.toggle('open', open);
  document.getElementById('drawerBg').classList.toggle('open', open);
}

/* ============ RENDER ============ */
function applyBranding(){
  const s = DB.settings||{};
  document.getElementById('logoWord').innerHTML = s.siteName ? esc(s.siteName).replace(/(\S+)$/,'<span class="accent">$1</span>') : 'VORTEX<span class="accent">RP</span>';
  if(s.logoDataUrl){
    document.getElementById('logoImg').src = s.logoDataUrl;
    document.getElementById('logoImg').style.display = 'block';
    document.getElementById('logoSvg').style.display = 'none';
  } else {
    document.getElementById('logoImg').style.display = 'none';
    document.getElementById('logoSvg').style.display = 'block';
  }
  document.getElementById('drawerFounderLink').style.display = isFounder() ? 'block' : 'none';
}
function render(){
  applyBranding();
  renderTopIcons();
  const app = document.getElementById('app');
  if(view.screen==='home') app.innerHTML = screenHome();
  else if(view.screen==='forum') app.innerHTML = screenForum();
  else if(view.screen==='thread') app.innerHTML = screenThread();
  else if(view.screen==='members') app.innerHTML = screenMembers();
  else if(view.screen==='founder') app.innerHTML = screenFounder();
}

function renderTopIcons(){
  const box = document.getElementById('topIcons');
  const profileSlot = document.getElementById('profileSlot');
  const avatarLetter = session.username ? session.username[0].toUpperCase() : null;
  profileSlot.innerHTML = session.username
    ? `<div class="avatar-chip" onclick="toggleAccountPanel(event)">${avatarLetter}</div>`
    : `<button class="icon-btn" onclick="openLogin()" style="font-size:11px; font-weight:700; width:auto; padding:6px 9px;">LOG IN</button>`;
  box.innerHTML = `
    <button class="icon-btn" onclick="toast('Conversations — nothing yet')">${ICONS.mail}</button>
    <button class="icon-btn" onclick="toast('No new alerts')">${ICONS.bell}</button>
    <button class="icon-btn" onclick="toast('What\\'s new — all caught up')">${ICONS.bolt}</button>
    <button class="icon-btn" onclick="openSearchModal()">${ICONS.search}</button>
  `;
}

function toggleAccountPanel(e){
  e.stopPropagation();
  let el = document.getElementById('accountPanel');
  if(el){ el.remove(); return; }
  const myPosts = DB.posts.filter(p=>p.author===session.username).length;
  const myThreads = DB.threads.filter(t=>t.author===session.username).length;
  const meUser = DB.users.find(u=>u.username===session.username);
  const joinedStr = meUser && meUser.joined ? new Date(meUser.joined).toLocaleDateString() : '—';
  const panel = document.createElement('div');
  panel.className='account-panel'; panel.id='accountPanel';
  panel.innerHTML = `
    <div class="account-head">
      <div class="account-avatar">${session.username[0].toUpperCase()}</div>
      <div>
        <div class="account-name">${esc(session.username)}</div>
        <div class="account-role">${roleLabel(session.role)}${isFounder()?` <span class="founder-badge-inline">${ICONS.crown} FOUNDER</span>`:''}</div>
        <div class="account-stats">
          <span>Messages: <b>${myPosts}</b></span>
          <span>Threads started: <b>${myThreads}</b></span>
          <span>Joined: <b>${joinedStr}</b></span>
        </div>
      </div>
    </div>
    <div class="account-grid">
      ${isFounder() ? `<div class="founder-link" onclick="go('founder'); closeAccountPanel();">${ICONS.crown} Founder Dashboard</div>` : ''}
      <div onclick="toast('Coming soon')">Your content</div>
      <div onclick="toast('Coming soon')">News feed</div>
      <div onclick="toast('Coming soon')">Account details</div>
      <div onclick="toast('Coming soon')">Signature</div>
      <div onclick="toast('Coming soon')">Privacy</div>
      <div onclick="toast('Coming soon')">Preferences</div>
    </div>
    <div class="account-logout" onclick="logout()">Log out</div>
    <div class="account-status"><input placeholder="Update your status..." onkeydown="if(event.key==='Enter'){toast('Status updated'); toggleAccountPanel(event)}"></div>
  `;
  document.body.appendChild(panel);
  setTimeout(()=>document.addEventListener('click', closeAccountPanel, {once:true}), 0);
}
function closeAccountPanel(){ document.getElementById('accountPanel')?.remove(); }

function forumIcon(f){ return f.link ? ICONS.link : ICONS.chat; }

function descendantForumIds(id){
  let ids = [id];
  DB.forums.filter(f=>f.parentForumId===id).forEach(c=>{ ids = ids.concat(descendantForumIds(c.id)); });
  return ids;
}
function childForums(id){ return DB.forums.filter(f=>f.parentForumId===id).sort((a,b)=>(a.order||0)-(b.order||0)); }

function renderForumRow(f){
  if(f.link){
    return `<div class="row" onclick="toast('This links out to: ${esc(f.name)}')">
      <div class="row-icon">${ICONS.link}</div>
      <div class="row-main"><div class="row-title underline">${esc(f.name)}</div></div>
    </div>`;
  }
  const ids = descendantForumIds(f.id);
  const threads = DB.threads.filter(t=>ids.includes(t.forumId));
  const last = threads.slice().sort((a,b)=>b.updated-a.updated)[0];
  const postCount = DB.posts.filter(p=>threads.some(t=>t.id===p.threadId)).length;
  return `
    <div class="row" onclick="go('forum',{forumId:'${f.id}'})">
      <div class="row-icon">${forumIcon(f)}</div>
      <div class="row-main">
        <div class="row-title underline">${esc(f.name)}</div>
        <div class="row-stats">Threads: <b>${threads.length}</b> &nbsp;Messages: <b>${postCount}</b></div>
        ${last ? `
          <div class="row-last">${last.prefix?`<span class="tag ${last.prefix}">${TAG_LABEL[last.prefix]}</span>`:''}<a onclick="event.stopPropagation(); go('thread',{threadId:'${last.id}'})">${esc(last.title)}</a>
            <span class="when">${timeAgo(last.updated)} · <span class="by">${esc(last.author)}</span></span></div>
        ` : `<div style="font-size:12.5px; color:var(--muted);">No threads yet</div>`}
      </div>
    </div>`;
}

function screenHome(){
  const catsHTML = DB.categories.map(c=>`
    ${c.name ? `<div class="divider-bar">${esc(c.name)}</div>` : ''}
    ${DB.forums.filter(f=>f.catId===c.id).sort((a,b)=>(a.order||0)-(b.order||0)).map(renderForumRow).join('') || (c.name ? '<div class="empty">No sub-forums yet.</div>' : '')}
  `).join('') || '<div class="empty">No categories yet.</div>';

  return `
    <div class="header-block">
      <div class="breadcrumb" onclick="go('home')">‹ Home</div>
      <div class="page-title">VORTEX RP | Forum</div>
      <div class="page-desc">OPEN WORLD ROLEPLAY — VORTEX RP COMMUNITY</div>
      <div class="pill-row">
        <button class="pill-btn" onclick="toast('Showing all new posts')">${ICONS.bolt} New posts</button>
        ${session.username ? `<button class="pill-btn ghost" onclick="toast('Pick a sub-forum first to post a thread')">${ICONS.chat} Post thread…</button>` : ''}
      </div>
    </div>
    ${catsHTML}
  `;
}

function screenForum(){
  const forum = DB.forums.find(f=>f.id===view.forumId);
  if(!forum) return '<div class="empty">Sub-forum not found.</div>';
  const backTarget = forum.parentForumId ? `go('forum',{forumId:'${forum.parentForumId}'})` : `go('home')`;
  const backLabel = forum.parentForumId ? esc(DB.forums.find(x=>x.id===forum.parentForumId)?.name || 'Back') : 'Home';
  const kids = childForums(forum.id);

  if(kids.length){
    return `
      <div class="header-block">
        <div class="breadcrumb" onclick="${backTarget}">‹ ${backLabel}</div>
        <div class="page-title">${esc(forum.name)}</div>
        <div class="page-desc">${esc(forum.desc||'')}</div>
      </div>
      ${kids.map(renderForumRow).join('')}
    `;
  }

  const threads = DB.threads.filter(t=>t.forumId===forum.id).sort((a,b)=>(b.pinned-a.pinned)||(b.updated-a.updated));
  return `
    <div class="header-block">
      <div class="breadcrumb" onclick="${backTarget}">‹ ${backLabel}</div>
      <div class="page-title">${esc(forum.name)}</div>
      <div class="page-desc">${esc(forum.desc||'')}</div>
      <div class="pill-row">
        ${session.username ? `<button class="pill-btn" onclick="openNewThread('${forum.id}')">${ICONS.chat} Post thread…</button>` : ''}
      </div>
    </div>
    ${threads.map(t=>{
      const postCount = DB.posts.filter(p=>p.threadId===t.id).length;
      const lastPost = DB.posts.filter(p=>p.threadId===t.id).sort((a,b)=>b.created-a.created)[0];
      return `
      <div class="row" onclick="go('thread',{threadId:'${t.id}'})">
        <div class="row-icon">${ICONS.chat}</div>
        <div class="row-main">
          <div class="row-title">${t.pinned?'<span class="tag pinned">PINNED</span>':''}${t.locked?'<span class="tag locked">LOCKED</span>':''}${t.prefix?`<span class="tag ${t.prefix}">${TAG_LABEL[t.prefix]}</span>`:''}${esc(t.title)}</div>
          <div class="row-stats">Replies: <b>${postCount-1<0?0:postCount-1}</b></div>
          <div class="row-last"><span class="when">${timeAgo((lastPost||t).created)} · <span class="by">${esc((lastPost||t).author)}</span></span></div>
        </div>
      </div>`;
    }).join('') || '<div class="empty">No threads yet. Be the first to post.</div>'}
  `;
}

function screenThread(){
  const t = DB.threads.find(x=>x.id===view.threadId);
  if(!t) return '<div class="empty">Thread not found.</div>';
  const forum = DB.forums.find(f=>f.id===t.forumId);
  const posts = DB.posts.filter(p=>p.threadId===t.id).sort((a,b)=>a.created-b.created);
  const modOk = canModerate();
  return `
    <div class="header-block">
      <div class="breadcrumb" onclick="go('forum',{forumId:'${forum.id}'})">‹ ${esc(forum.name)}</div>
      <div class="page-title" style="font-size:19px;">${t.pinned?'<span class="tag pinned">PINNED</span>':''}${t.locked?'<span class="tag locked">LOCKED</span>':''}${t.prefix?`<span class="tag ${t.prefix}">${TAG_LABEL[t.prefix]}</span>`:''}${esc(t.title)}</div>
      ${modOk ? `
        <div clas