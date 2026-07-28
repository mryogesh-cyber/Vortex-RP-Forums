/* ============ ICONS (inline SVG, line-style) ============ */
const ICONS = {
  menu:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  mail:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
  bell:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  bolt:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  search:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
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
  if(s.logoDataUrl){
    document.getElementById('logoImg').src = s.logoDataUrl;
    document.getElementById('logoImg').style.display = 'block';
    document.getElementById('logoWord').style.display = 'none';
  } else {
    document.getElementById('logoImg').style.display = 'none';
    document.getElementById('logoWord').style.display = 'flex';
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
        <div class="pill-row" style="margin-top:8px;">
          <button class="pill-btn ghost" onclick="togglePin('${t.id}')">${t.pinned?'Unpin':'Pin'}</button>
          <button class="pill-btn ghost" onclick="toggleLock('${t.id}')">${t.locked?'Unlock':'Lock'}</button>
          <button class="pill-btn ghost" style="color:var(--red); border-color:var(--red);" onclick="deleteThread('${t.id}')">Delete</button>
        </div>` : ''}
    </div>
    ${posts.map((p,i)=>`
      <div class="post">
        <div class="post-side">
          <div class="avatar-lg">${esc((p.author||'?')[0].toUpperCase())}</div>
          <div class="uname">${esc(p.author)}</div>
          <div class="urole">${p.authorRole==='admin'?'Admin':'Member'}</div>
        </div>
        <div class="post-body">
          <div class="post-meta"><span>#${i+1}</span><span>${timeAgo(p.created)}</span></div>
          <div class="post-text">${esc(p.text)}</div>
          ${modOk ? `<div class="post-actions"><button class="danger" onclick="deletePost('${p.id}')">Delete</button></div>` : ''}
        </div>
      </div>
    `).join('')}
    ${session.username ? (t.locked && !modOk ? '<div class="empty">This thread is locked.</div>' : `
      <div class="reply-box">
        <label>Your reply</label>
        <textarea id="replyText" placeholder="Write your reply..."></textarea>
        <button class="pill-btn" onclick="submitReply('${t.id}')">Post Reply</button>
      </div>`) : '<div class="empty">Log in to reply.</div>'}
  `;
}

function screenMembers(){
  return `
    <div class="header-block">
      <div class="breadcrumb" onclick="go('home')">‹ Home</div>
      <div class="page-title">Members</div>
      <div class="page-desc">${DB.users.length} total members</div>
    </div>
    ${DB.users.map(u=>`
      <div class="row">
        <div class="avatar-lg" style="width:40px;height:40px;font-size:14px;">${esc(u.username[0].toUpperCase())}</div>
        <div class="row-main">
          <div class="row-title">${esc(u.username)} ${u.banned?'<span class="tag rejected">BANNED</span>':''}</div>
          <div class="row-stats">${u.role==='founder'?`<span class="tag founder">${ICONS.crown} FOUNDER</span>`:rankOf(u.role)>=80?`<span class="tag pending">${roleLabel(u.role)}</span>`:roleLabel(u.role)}</div>
        </div>
      </div>
    `).join('')}
  `;
}

function openSearchModal(){
  modal(`
    <h3>Search forums</h3>
    <div class="field"><input id="searchInput" placeholder="Search threads..." onkeydown="if(event.key==='Enter')runSearch()"></div>
    <div class="actions"><button onclick="closeModal()">Cancel</button><button class="primary" onclick="runSearch()">Search</button></div>
  `);
}
function runSearch(){
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  closeModal();
  if(!q) return;
  const results = DB.threads.filter(t=>t.title.toLowerCase().includes(q));
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="header-block">
      <div class="breadcrumb" onclick="go('home')">‹ Home</div>
      <div class="page-title">Search results</div>
      <div class="page-desc">${results.length} match${results.length===1?'':'es'} for "${esc(q)}"</div>
    </div>
    ${results.map(t=>`
      <div class="row" onclick="go('thread',{threadId:'${t.id}'})">
        <div class="row-icon">${ICONS.chat}</div>
        <div class="row-main"><div class="row-title">${esc(t.title)}</div><div class="row-stats">by ${esc(t.author)}</div></div>
      </div>
    `).join('') || '<div class="empty">No matches.</div>'}
  `;
}

/* ============ UTIL ============ */
function esc(s){ return (s||'').toString().replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function timeAgo(ts){
  const s = Math.floor((Date.now()-ts)/1000);
  if(s<60) return 'just now';
  if(s<3600) return Math.floor(s/60)+'m ago';
  if(s<86400) return Math.floor(s/3600)+'h ago';
  return Math.floor(s/86400)+'d ago';
}
function toast(msg){
  const el = document.createElement('div'); el.className='toast'; el.textContent=msg;
  document.body.appendChild(el); setTimeout(()=>el.remove(),2200);
}

/* ============ AUTH ============ */
function openLogin(){
  modal(`
    <h3>Log In</h3>
    <div class="field"><label>Username</label><input id="loginUser"></div>
    <div class="field"><label>Password</label><input id="loginPass" type="password"></div>
    <div class="actions"><button onclick="closeModal()">Cancel</button><button class="primary" onclick="doLogin()">Log In</button></div>
    <div style="margin-top:10px; font-size:11px; color:var(--muted);">Demo admin: admin / admin</div>
    <div style="margin-top:8px; font-size:12.5px;">No account? <a style="color:var(--purple); font-weight:600; cursor:pointer;" onclick="closeModal(); openRegister();">Register</a></div>
  `);
}
function openRegister(){
  modal(`
    <h3>Register</h3>
    <div class="field"><label>Username</label><input id="regUser"></div>
    <div class="field"><label>Password</label><input id="regPass" type="password"></div>
    <div class="actions"><button onclick="closeModal()">Cancel</button><button class="primary" onclick="doRegister()">Create Account</button></div>
  `);
}
function modal(html){
  const bg = document.createElement('div'); bg.className='modal-bg'; bg.id='modalBg';
  bg.innerHTML = `<div class="modal">${html}</div>`;
  bg.addEventListener('click', e=>{ if(e.target===bg) closeModal(); });
  document.body.appendChild(bg);
}
function closeModal(){ document.getElementById('modalBg')?.remove(); }

async function doLogin(){
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value;
  if(!u||!p){ toast('Fill both fields'); return; }
  const email = usernameToEmail(u);
  const { data, error } = await sb.auth.signInWithPassword({ email, password:p });
  if(error){ toast('Invalid username or password'); return; }
  const { data: profile } = await sb.from('profiles').select('*').eq('id', data.user.id).maybeSingle();
  if(profile && profile.banned){ await sb.auth.signOut(); toast('This account has been banned.'); return; }
  session = { username: profile?.username || u, role: profile?.role || 'member', id: data.user.id };
  await fetchAllData(); closeModal(); render(); toast('Logged in as '+session.username);
}
async function doRegister(){
  const u = document.getElementById('regUser').value.trim();
  const p = document.getElementById('regPass').value;
  if(!u||!p){ toast('Fill both fields'); return; }
  if(p.length<6){ toast('Password must be at least 6 characters'); return; }
  const email = usernameToEmail(u);
  const { data, error } = await sb.auth.signUp({ email, password:p, options:{ data:{ username:u } } });
  if(error){ toast(error.message); return; }
  if(!data.session){
    toast('Account created, but email confirmation is still on in Supabase — see setup notes.');
    closeModal(); return;
  }
  session = { username:u, role:'member', id:data.user.id };
  await fetchAllData(); closeModal(); render(); toast('Welcome, '+u);
}
async function logout(){ await sb.auth.signOut(); session={username:null,role:null,id:null}; closeAccountPanel(); go('home'); }

/* ============ ADMIN CRUD ============ */
async function createCategory(){
  const name = document.getElementById('newCatName').value.trim();
  if(!name) return toast('Category name required');
  const { error } = await sb.from('categories').insert({ name, sort_order: DB.categories.length+1 });
  if(error) return toast(error.message);
  await fetchAllData(); render();
}
async function deleteCategory(id){
  if(!confirm('Delete this category and all its sub-forums/threads?')) return;
  const { error } = await sb.from('categories').delete().eq('id', id);
  if(error) return toast(error.message);
  await fetchAllData(); render();
}
async function createForum(catId){
  const name = document.getElementById('newForumName_'+catId).value.trim();
  const desc = document.getElementById('newForumDesc_'+catId).value.trim();
  if(!name) return toast('Sub-forum name required');
  const { error } = await sb.from('forums').insert({ category_id:catId, name, description:desc, sort_order: DB.forums.length+1 });
  if(error) return toast(error.message);
  await fetchAllData(); render();
}
async function deleteForum(id){
  if(!confirm('Delete this sub-forum and its threads?')) return;
  const { error } = await sb.from('forums').delete().eq('id', id);
  if(error) return toast(error.message);
  await fetchAllData(); render();
}

/* ============ THREADS / POSTS ============ */
function openNewThread(forumId){
  modal(`
    <h3>New Thread</h3>
    <div class="field"><label>Prefix</label>
      <select id="threadPrefix">${PREFIXES.map(p=>`<option value="${p.v}">${p.label}</option>`).join('')}</select>
    </div>
    <div class="field"><label>Title</label><input id="newThreadTitle"></div>
    <div class="field"><label>Message</label><textarea id="newThreadBody" style="min-height:100px;"></textarea></div>
    <div class="actions"><button onclick="closeModal()">Cancel</button><button class="primary" onclick="submitNewThread('${forumId}')">Post Thread</button></div>
  `);
}
async function submitNewThread(forumId){
  const title = document.getElementById('newThreadTitle').value.trim();
  const body = document.getElementById('newThreadBody').value.trim();
  const prefix = document.getElementById('threadPrefix').value;
  if(!title || !body) return toast('Fill in both fields');
  const { data: threadRow, error } = await sb.from('threads')
    .insert({ forum_id:forumId, title, prefix, author_id:session.id })
    .select().single();
  if(error) return toast(error.message);
  const { error: postErr } = await sb.from('posts').insert({ thread_id:threadRow.id, author_id:session.id, body });
  if(postErr) return toast(postErr.message);
  await fetchAllData(); closeModal(); go('thread',{threadId:threadRow.id});
}
async function submitReply(threadId){
  const text = document.getElementById('replyText').value.trim();
  if(!text) return toast('Write something first');
  const { error } = await sb.from('posts').insert({ thread_id:threadId, author_id:session.id, body:text });
  if(error) return toast(error.message);
  await sb.from('threads').update({ updated_at: new Date().toISOString() }).eq('id', threadId);
  await fetchAllData(); go('thread',{threadId});
}
async function togglePin(id){
  const t = DB.threads.find(x=>x.id===id);
  const { error } = await sb.from('threads').update({ pinned: !t.pinned }).eq('id', id);
  if(error) return toast(error.message);
  await fetchAllData(); render();
}
async function toggleLock(id){
  const t = DB.threads.find(x=>x.id===id);
  const { error } = await sb.from('threads').update({ locked: !t.locked }).eq('id', id);
  if(error) return toast(error.message);
  await fetchAllData(); render();
}
async function deleteThread(id){
  if(!confirm('Delete this thread?')) return;
  const { error } = await sb.from('threads').delete().eq('id', id);
  if(error) return toast(error.message);
  await fetchAllData(); go('home');
}
async function deletePost(id){
  if(!confirm('Delete this post?')) return;
  const { error } = await sb.from('posts').delete().eq('id', id);
  if(error) return toast(error.message);
  await fetchAllData(); render();
}

/* ============ FOUNDER DASHBOARD ============ */
const ALL_ROLES = ['member','verified','vip','tester','helper','moderator','admin','founder'];
function allRoleOptions(){
  const custom = (DB.customRoles||[]).map(r=>r.name);
  return [...ALL_ROLES, ...custom];
}

function screenFounder(){
  if(!isFounder()){
    return `<div class="empty">Founder access only.</div>`;
  }
  const tab = view.fdTab || 'overview';
  const tabs = [
    ['overview','Overview'], ['forums','Forums'], ['users','Users'],
    ['announce','Announcements'], ['settings','Site Settings'],
    ['roles','Roles'], ['logs','Logs'], ['db','Database'],
  ];

  let body = '';
  if(tab==='overview'){
    body = `
      <div class="fd-section">
        <h4>${ICONS.gauge} Overview</h4>
        <div class="fd-row"><span>Total members</span><b>${DB.users.length}</b></div>
        <div class="fd-row"><span>Total threads</span><b>${DB.threads.length}</b></div>
        <div class="fd-row"><span>Total posts</span><b>${DB.posts.length}</b></div>
        <div class="fd-row"><span>Categories</span><b>${DB.categories.length}</b></div>
        <div class="fd-row"><span>Forums / sub-forums</span><b>${DB.forums.length}</b></div>
        <div class="fd-row"><span>Banned accounts</span><b>${DB.users.filter(u=>u.banned).length}</b></div>
      </div>
      <div class="fd-section">
        <h4>${ICONS.shield} Founder permission level</h4>
        <div class="fd-row"><span>Your rank</span><b>100 — cannot be overridden</b></div>
        <div style="font-size:12.5px; color:var(--muted); margin-top:6px;">Full access to every page: threads, categories, users, roles, announcements, site settings, database view, and logs.</div>
      </div>
    `;
  } else if(tab==='forums'){
    body = `
      <div class="fd-section">
        <h4>${ICONS.settings} Create category</h4>
        <div class="admin-grid">
          <input id="newCatName" placeholder="Category name">
          <input id="newCatDesc" placeholder="Short description">
        </div>
        <button class="admin-btn gold" onclick="createCategory()">+ Add Category</button>
      </div>
      <div class="fd-section">
        <h4>${ICONS.settings} Categories & sub-forums</h4>
        ${DB.categories.map(c=>`
          <div class="admin-list-item" style="flex-direction:column; align-items:stretch;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>${esc(c.name||'(unnamed / top links)')}</strong>
              <button onclick="deleteCategory('${c.id}')">Delete</button>
            </div>
            <div style="margin-top:8px; padding-left:8px;">
              ${DB.forums.filter(f=>f.catId===c.id).map(f=>`
                <div class="admin-list-item"><span>${esc(f.name)}</span><button onclick="deleteForum('${f.id}')">Delete</button></div>
              `).join('') || '<div style="font-size:12px;color:var(--muted)">No sub-forums yet</div>'}
              <div class="admin-grid" style="margin-top:8px;">
                <input id="newForumName_${c.id}" placeholder="Sub-forum name">
                <input id="newForumDesc_${c.id}" placeholder="Description">
              </div>
              <button class="admin-btn" onclick="createForum('${c.id}')">+ Add Sub-forum</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if(tab==='users'){
    body = `
      <div class="fd-section">
        <h4>${ICONS.users} Manage users (${DB.users.length})</h4>
        ${DB.users.map(u=>`
          <div class="fd-row">
            <span>${esc(u.username)} ${u.banned?'<span class="tag rejected">BANNED</span>':''}${u.role==='founder'?`<span class="tag founder">${ICONS.crown} FOUNDER</span>`:''}</span>
            <div style="display:flex; gap:6px; align-items:center;">
              ${u.role==='founder' ? `<span style="font-size:11.5px; color:var(--muted);">Protected — rank 100</span>` : `
                <select style="width:auto; padding:5px 8px; font-size:12px;" onchange="updateUserRole('${esc(u.username)}', this.value)">
                  ${allRoleOptions().map(r=>`<option value="${r}" ${u.role===r?'selected':''}>${roleLabel(r)}</option>`).join('')}
                </select>
                <button class="admin-btn" style="background:${u.banned?'linear-gradient(135deg,var(--green),#1f8f52)':'linear-gradient(135deg,var(--red),#9c2b46)'}" onclick="toggleBan('${esc(u.username)}')">${u.banned?'Unban':ICONS.ban+' Ban'}</button>
              `}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if(tab==='announce'){
    const announceForum = DB.forums.find(f=>f.name==='Announcements');
    body = `
      <div class="fd-section">
        <h4>${ICONS.megaphone} Post an announcement</h4>
        <div class="field" style="margin-bottom:10px;"><label>Title</label><input id="annTitle" placeholder="Announcement title"></div>
        <div class="field" style="margin-bottom:10px;"><label>Message</label><textarea id="annBody" style="min-height:100px;" placeholder="Write the announcement..."></textarea></div>
        <button class="admin-btn gold" onclick="createAnnouncement('${announceForum?announceForum.id:''}')">${ICONS.megaphone} Publish (pinned)</button>
      </div>
    `;
  } else if(tab==='settings'){
    const s = DB.settings||{};
    body = `
      <div class="fd-section">
        <h4>${ICONS.settings} Site settings</h4>
        <div class="field" style="margin-bottom:10px;"><label>Site name</label><input id="siteName" value="${esc(s.siteName||'VORTEX RP')}"></div>
        <div class="field" style="margin-bottom:10px;"><label>Tagline</label><input id="siteTagline" value="${esc(s.tagline||'')}"></div>
        <div class="field" style="margin-bottom:12px;">
          <label>Logo</label>
          <div style="display:flex; align-items:center; gap:12px;">
            ${s.logoDataUrl ? `<img class="fd-logo-preview" src="${s.logoDataUrl}">` : `<div class="fd-logo-preview" style="display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.05);color:var(--muted);font-size:10px;">none</div>`}
            <input type="file" accept="image/*" onchange="handleLogoUpload(event)">
          </div>
          ${s.logoDataUrl ? `<button class="admin-btn" style="background:var(--red); margin-top:8px;" onclick="clearLogo()">Remove logo (use text mark)</button>` : ''}
        </div>
        <button class="admin-btn gold" onclick="saveSiteSettings()">${ICONS.upload} Save settings</button>
      </div>
    `;
  } else if(tab==='roles'){
    body = `
      <div class="fd-section">
        <h4>${ICONS.shield} Custom roles</h4>
        <div class="admin-grid">
          <input id="newRoleName" placeholder="Role name (e.g. Event Host)">
          <input id="newRoleRank" placeholder="Rank number (1-99)" type="number">
        </div>
        <button class="admin-btn gold" onclick="createCustomRole()">+ Add Role</button>
        <div style="margin-top:14px;">
          ${(DB.customRoles||[]).map(r=>`
            <div class="fd-row"><span>${esc(r.name)} — rank ${r.rank}</span><button class="admin-btn" style="background:var(--red)" onclick="deleteCustomRole('${esc(r.name)}')">Delete</button></div>
          `).join('') || '<div style="font-size:12.5px; color:var(--muted);">No custom roles yet.</div>'}
        </div>
      </div>
    `;
  } else if(tab==='logs'){
    body = `
      <div class="fd-section">
        <h4>${ICONS.logs} Recent activity logs</h4>
        ${(DB.logs||[]).slice(0,60).map(l=>`
          <div class="fd-row"><span>${esc(l.action)}</span><span style="color:var(--muted); font-size:11.5px;">${esc(l.actor)} · ${timeAgo(l.time)}</span></div>
        `).join('') || '<div style="font-size:12.5px; color:var(--muted);">No logs yet.</div>'}
      </div>
    `;
  } else if(tab==='db'){
    body = `
      <div class="fd-section">
        <h4>${ICONS.db} Raw database (read-only)</h4>
        <pre class="fd-json">${esc(JSON.stringify(DB, null, 2)).slice(0,6000)}</pre>
      </div>
    `;
  }

  return `
    <div class="header-block">
      <div class="breadcrumb" onclick="go('home')">‹ Home</div>
      <div class="page-title">${ICONS.crown} Founder Dashboard</div>
      <div class="page-desc">Unrestricted access — permission level 100</div>
    </div>
    <div class="fd-tabbar">
      ${tabs.map(([k,label])=>`<div class="fd-tab ${tab===k?'active':''}" onclick="go('founder',{fdTab:'${k}'})">${label}</div>`).join('')}
    </div>
    ${body}
  `;
}

async function updateUserRole(username, role){
  const u = DB.users.find(x=>x.username===username);
  if(!u || u.role==='founder') return;
  const { error } = await sb.from('profiles').update({ role }).eq('id', u.id);
  if(error) return toast(error.message);
  await addLog(`Changed ${username}'s role to ${roleLabel(role)}`);
  await fetchAllData(); render();
}
async function toggleBan(username){
  const u = DB.users.find(x=>x.username===username);
  if(!u || u.role==='founder') return;
  const { error } = await sb.from('profiles').update({ banned: !u.banned }).eq('id', u.id);
  if(error) return toast(error.message);
  await addLog(`${!u.banned?'Banned':'Unbanned'} ${username}`);
  await fetchAllData(); render();
}
async function createAnnouncement(forumId){
  const title = document.getElementById('annTitle').value.trim();
  const body = document.getElementById('annBody').value.trim();
  if(!title || !body || !forumId) return toast('Fill in both fields');
  const { data: threadRow, error } = await sb.from('threads')
    .insert({ forum_id:forumId, title, prefix:'important', author_id:session.id, pinned:true })
    .select().single();
  if(error) return toast(error.message);
  const { error: postErr } = await sb.from('posts').insert({ thread_id:threadRow.id, author_id:session.id, body });
  if(postErr) return toast(postErr.message);
  await addLog(`Published announcement: ${title}`);
  await fetchAllData(); toast('Announcement published'); go('thread',{threadId:threadRow.id});
}
async function saveSiteSettings(){
  const siteName = document.getElementById('siteName').value.trim() || 'VORTEX RP';
  const tagline = document.getElementById('siteTagline').value.trim();
  const { error } = await sb.from('site_settings').update({ site_name:siteName, tagline }).eq('id', 1);
  if(error) return toast(error.message);
  await addLog('Updated site settings');
  await fetchAllData(); render(); toast('Site settings saved');
}
function handleLogoUpload(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    const { error } = await sb.from('site_settings').update({ logo_url: reader.result }).eq('id', 1);
    if(error) return toast(error.message);
    await addLog('Uploaded a new site logo');
    await fetchAllData(); render(); toast('Logo updated');
  };
  reader.readAsDataURL(file);
}
async function clearLogo(){
  const { error } = await sb.from('site_settings').update({ logo_url: null }).eq('id', 1);
  if(error) return toast(error.message);
  await addLog('Removed the site logo (using text mark)');
  await fetchAllData(); render(); toast('Logo removed');
}
async function createCustomRole(){
  const name = document.getElementById('newRoleName').value.trim();
  const rank = parseInt(document.getElementById('newRoleRank').value, 10);
  if(!name || !rank || rank<1 || rank>99) return toast('Enter a name and rank between 1-99');
  if((DB.customRoles||[]).some(r=>r.name===name) || ALL_ROLES.includes(name)) return toast('Role name already exists');
  const { error } = await sb.from('custom_roles').insert({ name, rank });
  if(error) return toast(error.message);
  await addLog(`Created custom role: ${name} (rank ${rank})`);
  await fetchAllData(); render();
}
async function deleteCustomRole(name){
  const { error } = await sb.from('custom_roles').delete().eq('name', name);
  if(error) return toast(error.message);
  await addLog(`Deleted custom role: ${name}`);
  await fetchAllData(); render();
}

/* ============ INIT ============ */
(async function init(){
  try{
    await restoreSession();
    await fetchAllData();
  }catch(e){ console.error('Vortex RP init error:', e); }
  render();
})();
