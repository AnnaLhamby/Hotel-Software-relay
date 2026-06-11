const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></svg>',
  kanban: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="3" width="16" height="18"/><path d="M8 7h3v8H8zM14 7h2v5h-2z"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 20h18"/><path d="m4 16 4-4 4 3 7-9"/><path d="M7 20v-4M12 20v-5M17 20v-8"/></svg>',
  report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="3" width="16" height="18"/><path d="M8 17v-5M12 17V7M16 17v-8"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.7 2.7 0 1 1 4.4 2.1c-.9.6-1.4 1.1-1.4 2.4"/><path d="M12 17h.01"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/><path d="M12 3h7v18h-7"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 3.4-.2-.1a1.7 1.7 0 0 0-2.1.2 1.7 1.7 0 0 0-.5 1.5v.2H9v-.2a1.7 1.7 0 0 0-.5-1.5 1.7 1.7 0 0 0-2.1-.2l-.2.1-2-3.4.1-.1A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3.2 14H3v-4h.2a1.7 1.7 0 0 0 1.4-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2-3.4.2.1a1.7 1.7 0 0 0 2.1-.2A1.7 1.7 0 0 0 9 2h6a1.7 1.7 0 0 0 .5 1.5 1.7 1.7 0 0 0 2.1.2l.2-.1 2 3.4-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.4 1h.2v4h-.2a1.7 1.7 0 0 0-1.4 1Z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  towel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 8a4 4 0 1 1 8 0"/><path d="M6 11h12v8H6z"/><path d="M9 14h6"/></svg>',
  broom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 4v10"/><path d="M10 14h8l1 6H9z"/><path d="M12 4h4"/></svg>',
  drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12Z"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3z"/></svg>',
  food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 2v20M4 2v6a3 3 0 0 0 6 0V2M17 2v20M14 2h6"/></svg>',
  service: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 18h16"/><path d="M6 18a6 6 0 0 1 12 0"/><path d="M12 8v2"/><path d="M5 10l5-4 2 2 6-3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>',
};

const STORAGE_KEY = 'hotel-ops-tasks-v1';
const seedTasks = [
  { id: 'TSK-881', title: 'Extra Towels & Linens', room: '402', department: 'Housekeeping', priority: 'Urgent', status: 'New Requests', assignee: 'Unassigned', source: 'Guest iPad', time: '10:42 AM', notes: 'Guest requested two extra bath towels and fresh linens.', created: 12 },
  { id: 'TSK-882', title: 'AC Unit Inspection', room: '305', department: 'Maintenance', priority: 'High', status: 'In Progress', assignee: 'Marcus V.', source: 'Front Desk Audio', time: '09:15 AM', notes: 'Guest mentioned rattling sound from the unit when fan speed is set to high.', created: 44 },
  { id: 'TSK-883', title: 'Mini-bar Restock', room: '115', department: 'Housekeeping', priority: 'Normal', status: 'New Requests', assignee: 'Unassigned', source: 'Guest iPad', time: '11:15 AM', notes: 'Replace water, sparkling tea, and chocolate.', created: 8 },
  { id: 'TSK-884', title: 'In-Room Dining', room: '512', department: 'F&B', priority: 'Medium', status: 'Waiting', assignee: 'Maria S.', source: 'Front Desk Audio', time: '11:30 AM', notes: 'Hold: kitchen delay. Guest requested update before noon.', created: 29 },
  { id: 'TSK-885', title: 'Luggage Assistance', room: '304', department: 'Concierge', priority: 'Normal', status: 'Completed', assignee: 'John D.', source: 'Front Desk Audio', time: '10:05 AM', notes: 'Bags delivered to car bay.', created: 66 },
  { id: 'TSK-886', title: 'Ice Bucket Refill', room: '402', department: 'Housekeeping', priority: 'Normal', status: 'Completed', assignee: 'Sarah J.', source: 'Guest iPad', time: '08:30 PM', notes: 'Completed before turndown.', created: 92 },
];

let tasks = loadTasks();

const statuses = ['New Requests', 'In Progress', 'Waiting', 'Completed'];
const departments = ['Housekeeping', 'Maintenance', 'F&B', 'Concierge', 'Front Desk'];
let activeTaskId = 'TSK-882';
let captureTranscript = 'Guest in room 305: Can I get two extra pillows and fix the air conditioner?';
let extractedTasks = extractTasks(captureTranscript);
let recognition = null;
let isListening = false;

function init() {
  document.querySelectorAll('[data-icon]').forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || '';
  });

  document.querySelectorAll('.nav-item').forEach((button) => {
    button.addEventListener('click', () => setView(button.dataset.view));
  });

  document.getElementById('globalSearch').addEventListener('input', render);
  document.getElementById('quickCreate').addEventListener('click', () => document.getElementById('taskDialog').showModal());
  document.getElementById('closeDialog').addEventListener('click', () => document.getElementById('taskDialog').close());
  document.getElementById('cancelDialog').addEventListener('click', () => document.getElementById('taskDialog').close());
  document.getElementById('taskForm').addEventListener('submit', createManualTask);
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('./sw.js?v=3').then((registration) => registration.update()).catch(() => {});
  }
  render();
  setInterval(updateClock, 1000);
  updateClock();
}

function setView(view) {
  document.querySelectorAll('.view').forEach((node) => node.classList.toggle('active', node.id === view));
  document.querySelectorAll('.nav-item').forEach((node) => node.classList.toggle('active', node.dataset.view === view));
  document.getElementById('portalLabel').textContent = view === 'guest' ? 'GUEST PORTAL' : 'STAFF PORTAL';
  document.getElementById('globalSearch').placeholder = view === 'reporting' ? 'Search reports...' : view === 'guest' ? 'Search operations...' : 'Search tasks...';
  render();
}

function render() {
  renderGuest();
  renderCapture();
  renderKanban();
  renderTaskDetail();
  renderOps();
  renderReporting();
}

function queryTasks() {
  const query = document.getElementById('globalSearch').value.trim().toLowerCase();
  if (!query) return tasks;
  return tasks.filter((task) => [task.title, task.room, task.department, task.assignee, task.status].join(' ').toLowerCase().includes(query));
}

function renderGuest() {
  const active = tasks.filter((task) => task.room === '402' && task.status !== 'Completed');
  document.getElementById('guest').innerHTML = `
    <div class="page-head">
      <div><h2>Welcome, Mr. Chen</h2><p>Room 402 • Deluxe Executive Suite</p></div>
      <div class="timebox">CURRENT TIME (GMT+8)<strong id="guestClock">14:42</strong></div>
    </div>
    <div class="guest-grid">
      <div>
        <div class="request-grid">
          ${guestTiles().map((tile) => `
            <button class="request-tile" data-guest-request="${tile.title}" data-dept="${tile.department}" aria-label="${tile.title}">
              <span data-icon="${tile.icon}"></span><strong>${tile.label}</strong>
            </button>
          `).join('')}
        </div>
        <div class="two-column">
          <div>
            <h3 class="section-title"><span data-icon="clock"></span>Active Requests</h3>
            ${active.map(taskRow).join('') || '<div class="request-row"><strong>No active requests</strong><p>All caught up.</p></div>'}
          </div>
          <div>
            <h3 class="section-title"><span data-icon="clock"></span>Request History</h3>
            ${tasks.filter((task) => task.room === '402' && task.status === 'Completed').slice(0, 3).map(taskRow).join('')}
          </div>
        </div>
      </div>
      <div class="panel special">
        <p class="eyebrow">SPECIAL REQUEST</p>
        <textarea id="guestNote" placeholder="Specify any additional requirements or notes for the staff..."></textarea>
        <button class="primary full" id="guestSubmit">SUBMIT REQUEST</button>
      </div>
    </div>
  `;
  bindIcons(document.getElementById('guest'));
  document.querySelectorAll('[data-guest-request]').forEach((button) => {
    button.addEventListener('click', () => addTask({ title: button.dataset.guestRequest, room: '402', department: button.dataset.dept, priority: button.dataset.guestRequest.includes('Maintenance') ? 'High' : 'Normal', source: 'Guest iPad' }));
  });
  document.getElementById('guestSubmit').addEventListener('click', () => {
    const note = document.getElementById('guestNote').value.trim();
    addTask({ title: note ? 'Special Request' : 'General Guest Request', room: '402', department: 'Concierge', priority: 'Medium', source: 'Guest iPad', notes: note || 'Guest submitted a custom request.' });
    document.getElementById('guestNote').value = '';
  });
}

function renderCapture() {
  const speechSupported = Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  document.getElementById('capture').innerHTML = `
    <div class="capture-grid">
      <div>
        <div class="panel listen-panel">
          <div>
            <div class="mic-box"><button class="mic-core" id="captureToggle" aria-label="Toggle listening"><span data-icon="mic"></span></button></div>
            <h2 id="listenLabel">${isListening ? 'Listening...' : 'Audio Capture'}</h2>
            <p class="eyebrow">${speechSupported ? 'CLICK MICROPHONE TO START / STOP' : 'TYPE OR PASTE TRANSCRIPT BELOW'}</p>
            <textarea class="transcript-input" id="captureTranscript" rows="4">${escapeHTML(captureTranscript)}</textarea>
            <div class="submit-row compact"><button class="small-button" id="analyzeTranscript">Analyze Transcript</button><button class="small-button" id="clearTranscript">Clear</button></div>
          </div>
        </div>
        <div class="panel extraction">
          <div class="extraction-head"><p class="eyebrow">TASK EXTRACTION</p><p class="eyebrow" id="taskCount">${extractedTasks.length} TASKS IDENTIFIED</p></div>
          <div id="extractedTasks">
          ${extractedTasks.map((task, index) => `
            ${extractedTaskMarkup(task, index)}
          `).join('')}
          ${extractedTasks.length ? '' : '<div class="empty-extraction">No tasks identified yet. Capture or type a conversation, then analyze it.</div>'}
          </div>
          <div class="submit-row"><button class="small-button" id="discardExtracted">Discard All</button><button class="primary" id="submitExtracted">Submit Tasks</button></div>
        </div>
      </div>
      <div>
        <div class="panel side-panel">
          <div class="panel-head"><p class="eyebrow">RECENT REQUESTS</p></div>
          <div class="timeline-list">${tasks.slice(0, 4).map((task) => `<div class="timeline-item"><span class="dot"></span><div><strong>${task.title}</strong><br>Status: ${task.status.toUpperCase()}</div><span>${task.created}m ago</span></div>`).join('')}</div>
        </div>
      </div>
    </div>
  `;
  bindIcons(document.getElementById('capture'));
  document.getElementById('submitExtracted').addEventListener('click', () => {
    if (!extractedTasks.length) {
      toast('No extracted tasks to submit');
      return;
    }
    extractedTasks.forEach((task) => addTask({
      ...task,
      source: 'Front Desk Audio',
      notes: task.details || `Extracted from transcript: "${captureTranscript}"`,
    }, false));
    toast('Extracted tasks submitted to Kanban');
    captureTranscript = '';
    extractedTasks = [];
    render();
  });
  document.getElementById('discardExtracted').addEventListener('click', () => {
    extractedTasks = [];
    updateExtractionUI();
    toast('Draft extraction discarded');
  });
  document.getElementById('captureToggle').addEventListener('click', toggleSpeechCapture);
  document.getElementById('analyzeTranscript').addEventListener('click', () => {
    captureTranscript = document.getElementById('captureTranscript').value.trim();
    extractedTasks = extractTasks(captureTranscript);
    updateExtractionUI();
    toast(`${extractedTasks.length} task${extractedTasks.length === 1 ? '' : 's'} identified`);
  });
  document.getElementById('clearTranscript').addEventListener('click', () => {
    captureTranscript = '';
    extractedTasks = [];
    document.getElementById('captureTranscript').value = '';
    updateExtractionUI();
  });
  document.getElementById('captureTranscript').addEventListener('input', (event) => {
    captureTranscript = event.currentTarget.value;
  });
  document.querySelectorAll('[data-remove-extracted]').forEach((button) => {
    button.addEventListener('click', (event) => {
      extractedTasks.splice(Number(event.currentTarget.dataset.removeExtracted), 1);
      updateExtractionUI();
    });
  });
  bindExtractedTaskEditors();
}

function renderKanban() {
  const filtered = queryTasks();
  document.getElementById('kanban').innerHTML = `<div class="kanban-board">${statuses.map((status) => `
    <div class="lane">
      <div class="lane-head"><h3>${status} <span class="count">${filtered.filter((task) => task.status === status).length}</span></h3><button class="icon-button" aria-label="Lane menu">•••</button></div>
      ${filtered.filter((task) => task.status === status).map(taskCard).join('')}
    </div>
  `).join('')}</div>`;
  bindTaskCardEvents();
}

function renderTaskDetail() {
  const task = tasks.find((item) => item.id === activeTaskId) || tasks[0];
  if (!task) {
    document.getElementById('task').innerHTML = `
      <div class="panel special">
        <h2>No task selected</h2>
        <p>There are no tasks on the board right now.</p>
        <button class="primary" id="emptyBackToKanban">Back to Kanban</button>
      </div>
    `;
    document.getElementById('emptyBackToKanban').addEventListener('click', () => setView('kanban'));
    return;
  }
  document.getElementById('task').innerHTML = `
    <button class="small-button" id="backToKanban"><span data-icon="back"></span> TASK CAPTURE / ${task.department.toUpperCase()} / ${task.id}</button>
    <div class="detail-title">
      <span class="pill ${task.priority === 'Urgent' || task.priority === 'High' ? 'red' : ''}">${task.priority}</span> <span class="eyebrow">${task.id}</span>
      <h2>Request: ${task.title} (Room ${task.room})</h2>
    </div>
    <div class="detail-meta">
      <div><p class="eyebrow">ASSIGNED STAFF</p><strong>${task.assignee}</strong></div>
      <div><p class="eyebrow">LOCATION</p><strong>Guest Room ${task.room} - Wing B</strong></div>
      <div><p class="eyebrow">CURRENT STATUS</p><strong>● ${task.status.toUpperCase()}</strong></div>
    </div>
    <div class="detail-grid">
      <div>
        <div class="panel">
          <div class="panel-head"><h3 class="section-title">INTERNAL NOTES</h3><button class="small-button" id="addNote">ADD NOTE</button></div>
          <div class="note"><strong>Front Desk - Sarah K.</strong><p>"${task.notes}"</p></div>
          <div class="note"><strong>${task.department} - ${task.assignee}</strong><p>Initial inspection logged. Team is confirming materials and next step.</p></div>
        </div>
        <div class="asset-grid">
          <div class="panel special"><p class="eyebrow">ASSET INFORMATION</p><p>Unit Model: Lumina-Air V3-X</p><p>Last Service: Jan 12, 2024</p><button class="small-button full">VIEW ASSET HISTORY</button></div>
          <div class="panel"><div class="panel-head"><p class="eyebrow">ATTACHED MEDIA (2)</p></div><div class="asset-media"><div class="photo"></div><div class="photo second"></div><div class="upload">UPLOAD</div></div></div>
        </div>
      </div>
      <div class="panel side-panel">
        <div class="panel-head"><h3 class="section-title">TASK TIMELINE</h3></div>
        <div class="timeline-list">
          <div class="timeline-item"><span class="dot"></span><div><strong>Status Update: ${task.status}</strong><br>Changed by ${task.assignee}</div><span>10:10 AM</span></div>
          <div class="timeline-item"><span class="dot"></span><div><strong>Assigned to ${task.assignee}</strong><br>Assigned from ${task.department} Pool</div><span>10:05 AM</span></div>
          <div class="timeline-item"><span class="dot"></span><div><strong>Task Created</strong><br>Reported by ${task.source}</div><span>10:00 AM</span></div>
        </div>
        <div class="submit-row"><button class="small-button" data-status="${nextStatus(task.status)}">${nextStatus(task.status)}</button><button class="primary" id="completeTask"><span data-icon="check"></span> COMPLETE TASK</button></div>
      </div>
    </div>
  `;
  bindIcons(document.getElementById('task'));
  document.getElementById('backToKanban').addEventListener('click', () => setView('kanban'));
  document.getElementById('completeTask').addEventListener('click', () => moveTask(task.id, 'Completed'));
  document.querySelector('[data-status]').addEventListener('click', (event) => moveTask(task.id, event.currentTarget.dataset.status));
  document.getElementById('addNote').addEventListener('click', () => toast('Internal note field added'));
}

function renderOps() {
  const open = tasks.filter((task) => task.status !== 'Completed');
  const high = tasks.filter((task) => ['High', 'Urgent'].includes(task.priority) && task.status !== 'Completed');
  document.getElementById('ops').innerHTML = `
    <div class="metrics">
      <div class="metric"><p class="eyebrow">TOTAL OPEN REQUESTS</p><strong>${open.length}</strong><span> +2 from 1h ago</span></div>
      <div class="metric"><p class="eyebrow">AVG COMPLETION</p><strong>18m</strong><span> -3m efficiency gain</span></div>
      <div class="metric danger"><p class="eyebrow">HIGH PRIORITY</p><strong>${high.length}</strong><span class="pill red">URGENT</span></div>
      <div class="metric"><p class="eyebrow">STAFF UTILIZATION</p><strong>82%</strong><span> Optimal</span></div>
    </div>
    <div class="ops-grid">
      <div class="panel chart"><div class="panel-head"><h3>Tasks by Department</h3><button class="small-button">FULL REPORT ›</button></div>${barChart(departmentCounts(), true)}</div>
      <div class="panel side-panel"><div class="panel-head"><h3>Real-time Activity</h3></div>${tasks.slice(0, 4).map((task) => `<div class="request-row"><div><strong>Room ${task.room}</strong><p>${task.title} ${task.status.toLowerCase()} by ${task.assignee}.</p></div><span>${task.created}m ago</span></div>`).join('')}</div>
    </div>
    <div class="panel" style="margin-top:16px"><div class="panel-head"><h3>Staff Workload & Efficiency</h3></div>${staffTable()}</div>
  `;
}

function renderReporting() {
  document.getElementById('reporting').innerHTML = `
    <div class="page-head">
      <div><h2>Operational Analytics</h2><p>System performance and efficiency metrics.</p></div>
      <div class="top-actions"><button class="small-button">Last 30 Days</button><button class="small-button">Export CSV</button><button class="primary">Download PDF</button></div>
    </div>
    <div class="metrics">
      <div class="metric"><p class="eyebrow">RESOLUTION RATE</p><strong>94%</strong> <span style="color:var(--ok)">+2.1%</span><div class="track"><div class="fill" style="width:94%"></div></div></div>
      <div class="metric"><p class="eyebrow">PEAK VOLUME TIME</p><strong style="font-size:25px">10:00 - 12:00</strong><p>Morning Housekeeping Push</p></div>
      <div class="metric"><p class="eyebrow">MOST REQUESTED</p><strong style="font-size:25px">${mostRequested()}</strong><p>1,248 total requests</p></div>
      <div class="metric"><p class="eyebrow">STAFF UTILIZATION</p><strong>82%</strong><span> Optimal</span><div class="track"><div class="fill" style="width:82%"></div></div></div>
    </div>
    <div class="report-grid">
      <div class="panel chart"><div class="panel-head"><h3>Response Time Trends</h3><p class="eyebrow">AVG: 12.4 MIN</p></div>${barChart({ '01 Oct': 38, '05 Oct': 50, '10 Oct': 74, '15 Oct': 32, '20 Oct': 62, '25 Oct': 43, '30 Oct': 56 })}</div>
      <div class="panel special"><h3>Guest Satisfaction</h3><div class="score-ring"><div><strong>4.8</strong><br>/ 5.0</div></div><p>Based on 842 verified feedback entries this month.</p></div>
    </div>
    <div class="report-grid" style="margin-top:16px">
      <div class="panel"><div class="panel-head"><h3>Volume by Department</h3></div><div class="progress-list">${Object.entries(departmentCounts()).map(([name, value]) => `<div class="progress-row"><span>${name}</span><strong>${value * 9}%</strong><div class="track"><div class="fill" style="width:${Math.min(value * 22, 100)}%"></div></div></div>`).join('')}</div></div>
      <div class="panel leaderboard-panel"><div class="panel-head"><h3>Staff Performance Leaderboard</h3><button class="small-button">View All</button></div>${leaderboard()}</div>
    </div>
  `;
}

function guestTiles() {
  return [
    { title: 'Extra Towels & Linens', label: 'Extra<br>Towels', icon: 'towel', department: 'Housekeeping' },
    { title: 'Room Cleaning', label: 'Room<br>Cleaning', icon: 'broom', department: 'Housekeeping' },
    { title: 'Water Refill', label: 'Water<br>Refill', icon: 'drop', department: 'Housekeeping' },
    { title: 'Toiletries', label: 'Toiletries', icon: 'service', department: 'Housekeeping' },
    { title: 'Laundry Pickup', label: 'Laundry<br>Pickup', icon: 'kanban', department: 'Housekeeping' },
    { title: 'Maintenance Issue', label: 'Maintenance<br>Issue', icon: 'wrench', department: 'Maintenance' },
    { title: 'Food Delivery', label: 'Food<br>Delivery', icon: 'food', department: 'F&B' },
    { title: 'Concierge Service', label: 'Concierge<br>Service', icon: 'service', department: 'Concierge' },
  ];
}

function taskRow(task) {
  return `<div class="request-row"><div><strong>${task.title}</strong><p>${task.source} › ${task.department} Assigned</p></div><div><span class="pill">${task.status}</span><p>${task.status === 'Completed' ? 'Done' : '~5 mins'}</p></div></div>`;
}

function taskCard(task) {
  const completed = task.status === 'Completed' ? ' completed' : '';
  return `<article class="task-card${completed}" data-task-id="${task.id}">
    <div class="room">Room ${task.room}</div>
    <h4>${task.title}</h4>
    <div><span class="pill ${['Urgent', 'High'].includes(task.priority) ? 'red' : ''}">${task.priority}</span> <span class="pill">${task.department}</span></div>
    <div class="card-meta"><span>${task.assignee}</span><span>${task.time}</span></div>
    <div class="card-actions">
      <button class="small-button" data-open="${task.id}">Details</button>
      <select data-move="${task.id}" aria-label="Move task">
        ${statuses.map((status) => `<option ${status === task.status ? 'selected' : ''}>${status}</option>`).join('')}
      </select>
      <button class="delete-icon-button" data-delete-task="${task.id}" aria-label="Delete task">×</button>
    </div>
  </article>`;
}

function bindTaskCardEvents() {
  document.querySelectorAll('[data-open]').forEach((button) => {
    button.addEventListener('click', (event) => {
      activeTaskId = event.currentTarget.dataset.open;
      setView('task');
    });
  });
  document.querySelectorAll('[data-move]').forEach((select) => {
    select.addEventListener('change', (event) => moveTask(event.currentTarget.dataset.move, event.currentTarget.value));
  });
  document.querySelectorAll('[data-delete-task]').forEach((button) => {
    button.addEventListener('click', (event) => deleteTask(event.currentTarget.dataset.deleteTask));
  });
}

function addTask(partial, shouldRender = true) {
  const id = `TSK-${880 + tasks.length + 1}`;
  tasks.unshift({
    id,
    title: partial.title,
    room: partial.room || '402',
    department: partial.department || 'Housekeeping',
    priority: partial.priority || 'Normal',
    status: 'New Requests',
    assignee: partial.assignee || 'Unassigned',
    source: partial.source || 'Manual Entry',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    notes: partial.notes || `${partial.title} submitted through ${partial.source || 'Manual Entry'}.`,
    created: 0,
  });
  saveTasks();
  activeTaskId = id;
  if (shouldRender) {
    render();
    toast(`${partial.title} added to Kanban`);
  }
}

function moveTask(id, status) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  task.status = status;
  if (status !== 'New Requests' && task.assignee === 'Unassigned') task.assignee = task.department === 'Maintenance' ? 'Marcus V.' : 'Sarah J.';
  saveTasks();
  render();
  toast(`${task.title} moved to ${status}`);
}

function deleteTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  const confirmed = window.confirm(`Delete task "${task.title}"?`);
  if (!confirmed) return;
  tasks = tasks.filter((item) => item.id !== id);
  if (activeTaskId === id) activeTaskId = tasks[0]?.id || '';
  saveTasks();
  render();
  toast(`${task.title} deleted`);
}

function createManualTask(event) {
  event.preventDefault();
  const dialog = document.getElementById('taskDialog');
  const data = Object.fromEntries(new FormData(event.currentTarget));
  addTask({ ...data, source: 'Manual Entry' });
  event.currentTarget.reset();
  dialog.close();
}

function nextStatus(status) {
  const index = statuses.indexOf(status);
  return statuses[Math.min(index + 1, statuses.length - 1)];
}

function departmentCounts() {
  return departments.reduce((acc, department) => {
    acc[department] = tasks.filter((task) => task.department === department).length || 1;
    return acc;
  }, {});
}

function mostRequested() {
  const counts = tasks.reduce((acc, task) => {
    acc[task.title] = (acc[task.title] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

function barChart(values, shortLabels = false) {
  const max = Math.max(...Object.values(values));
  return `<div class="bar-chart">${Object.entries(values).map(([label, value], index) => `
    <div class="bar-wrap">
      <div class="bar ${index === 2 ? 'active' : ''}" style="height:${Math.max(18, (value / max) * 180)}px"></div>
      <span class="eyebrow">${shortLabels ? label.slice(0, 5).toUpperCase() : label}</span>
    </div>
  `).join('')}</div>`;
}

function staffTable() {
  return `<table class="table"><thead><tr><th>STAFF MEMBER</th><th>CURRENT TASKS</th><th>AVG DURATION</th><th>STATUS</th><th>ACTION</th></tr></thead><tbody>
    <tr><td>Sarah Jenkins</td><td>2</td><td>14m</td><td><span class="pill">On Shift</span></td><td><button class="small-button">Assign</button></td></tr>
    <tr><td>Marcus Vane</td><td>5</td><td>28m</td><td><span class="pill red">Overloaded</span></td><td><button class="small-button">Reassign</button></td></tr>
    <tr><td>David Chen</td><td>1</td><td>11m</td><td><span class="pill green">Available</span></td><td><button class="small-button">Assign</button></td></tr>
  </tbody></table>`;
}

function leaderboard() {
  return `<table class="table leaderboard-table"><thead><tr><th>Name</th><th>Department</th><th>Tasks</th><th>Avg. Time</th><th>Rating</th></tr></thead><tbody>
    <tr><td><strong>Elena Rodriguez</strong></td><td>Housekeeping</td><td>142</td><td>8m 40s</td><td><strong>4.9</strong></td></tr>
    <tr><td><strong>Marcus Chen</strong></td><td>Maintenance</td><td>98</td><td>15m 12s</td><td><strong>4.8</strong></td></tr>
    <tr><td><strong>Sarah Jenkins</strong></td><td>F&B</td><td>115</td><td>6m 22s</td><td><strong>4.7</strong></td></tr>
    <tr><td><strong>David Kim</strong></td><td>Front Desk</td><td>87</td><td>4m 15s</td><td><strong>4.9</strong></td></tr>
  </tbody></table>`;
}

function toggleSpeechCapture() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    toast('Speech capture is not supported in this browser. Type the transcript and click Analyze.');
    return;
  }

  if (isListening && recognition) {
    recognition.stop();
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  let finalTranscript = captureTranscript ? `${captureTranscript.trim()} ` : '';
  recognition.onstart = () => {
    isListening = true;
    const label = document.getElementById('listenLabel');
    if (label) label.textContent = 'Listening...';
    toast('Listening started');
  };
  recognition.onresult = (event) => {
    let interim = '';
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const phrase = event.results[index][0].transcript;
      if (event.results[index].isFinal) {
        finalTranscript += `${phrase.trim()} `;
      } else {
        interim += phrase;
      }
    }
    captureTranscript = `${finalTranscript}${interim}`.trim();
    const transcriptField = document.getElementById('captureTranscript');
    if (transcriptField) transcriptField.value = captureTranscript;
    extractedTasks = extractTasks(captureTranscript);
    updateExtractionUI();
  };
  recognition.onerror = (event) => {
    isListening = false;
    toast(event.error === 'not-allowed' ? 'Microphone permission was blocked' : 'Speech capture stopped');
    const label = document.getElementById('listenLabel');
    if (label) label.textContent = 'Audio Capture';
  };
  recognition.onend = () => {
    isListening = false;
    const label = document.getElementById('listenLabel');
    if (label) label.textContent = 'Audio Capture';
    extractedTasks = extractTasks(captureTranscript);
    updateExtractionUI();
  };
  recognition.start();
}

function updateExtractionUI() {
  const count = document.getElementById('taskCount');
  const list = document.getElementById('extractedTasks');
  if (!count || !list) return;
  count.textContent = `${extractedTasks.length} TASK${extractedTasks.length === 1 ? '' : 'S'} IDENTIFIED`;
  list.innerHTML = extractedTasks.length
    ? extractedTasks.map((task, index) => `
      ${extractedTaskMarkup(task, index)}
    `).join('')
    : '<div class="empty-extraction">No tasks identified yet. Capture or type a conversation, then analyze it.</div>';
  list.querySelectorAll('[data-remove-extracted]').forEach((button) => {
    button.addEventListener('click', (event) => {
      extractedTasks.splice(Number(event.currentTarget.dataset.removeExtracted), 1);
      updateExtractionUI();
    });
  });
  bindExtractedTaskEditors();
}

function extractedTaskMarkup(task, index) {
  return `
    <div class="extracted-task editable-extracted ${['High', 'Urgent'].includes(task.priority) ? 'urgent' : ''}">
      <div class="bar"></div>
      <div class="extracted-fields">
        <label>Task<input data-extracted-field="title" data-index="${index}" value="${escapeHTML(task.title)}" /></label>
        <label>Room<input data-extracted-field="room" data-index="${index}" value="${escapeHTML(task.room)}" /></label>
        <label>Responsible<select data-extracted-field="department" data-index="${index}">
          ${departments.map((department) => `<option ${department === task.department ? 'selected' : ''}>${department}</option>`).join('')}
        </select></label>
        <label>Priority<select data-extracted-field="priority" data-index="${index}">
          ${['Normal', 'Medium', 'High', 'Urgent'].map((priority) => `<option ${priority === task.priority ? 'selected' : ''}>${priority}</option>`).join('')}
        </select></label>
        <label class="wide">Details<textarea data-extracted-field="details" data-index="${index}" rows="2">${escapeHTML(task.details || '')}</textarea></label>
      </div>
      <div class="tiny-actions"><button data-remove-extracted="${index}" aria-label="Delete">⌫</button></div>
    </div>
  `;
}

function bindExtractedTaskEditors() {
  document.querySelectorAll('[data-extracted-field]').forEach((field) => {
    field.addEventListener('input', updateExtractedTaskFromField);
    field.addEventListener('change', updateExtractedTaskFromField);
  });
}

function updateExtractedTaskFromField(event) {
  const index = Number(event.currentTarget.dataset.index);
  const field = event.currentTarget.dataset.extractedField;
  if (!extractedTasks[index]) return;
  extractedTasks[index][field] = event.currentTarget.value;
}

function extractTasks(transcript) {
  const text = transcript.trim();
  if (!text) return [];
  const lower = text.toLowerCase();
  const room = findRoom(lower);
  const priority = inferPriority(lower);
  const rules = [
    { title: 'Extra Pillows', department: 'Housekeeping', keywords: ['pillow', 'pillows'] },
    { title: 'Extra Towels & Linens', department: 'Housekeeping', keywords: ['towel', 'towels', 'linen', 'linens', 'blanket', 'blankets'] },
    { title: 'Room Cleaning', department: 'Housekeeping', keywords: ['clean room', 'room cleaning', 'make up room', 'housekeeping'] },
    { title: 'Water Refill', department: 'Housekeeping', keywords: ['water refill', 'bottled water', 'more water'] },
    { title: 'Toiletries', department: 'Housekeeping', keywords: ['toiletries', 'toothbrush', 'soap', 'shampoo', 'conditioner'] },
    { title: 'Laundry Pickup', department: 'Housekeeping', keywords: ['laundry', 'dry cleaning'] },
    { title: 'Mini-bar Restock', department: 'Housekeeping', keywords: ['mini bar', 'minibar', 'restock'] },
    { title: 'AC Repair', department: 'Maintenance', keywords: ['air conditioner', 'air conditioning', 'a/c', 'ac ', 'ac unit', 'temperature'] },
    { title: 'Maintenance Issue', department: 'Maintenance', keywords: ['broken', 'repair', 'fix', 'leak', 'leaking', 'noise', 'rattling', 'light out', 'toilet'] },
    { title: 'In-Room Dining', department: 'F&B', keywords: ['food', 'dinner', 'breakfast', 'lunch', 'room service', 'coffee', 'tea'] },
    { title: 'Ice Bucket Refill', department: 'F&B', keywords: ['ice bucket', 'ice'] },
    { title: 'Luggage Assistance', department: 'Concierge', keywords: ['luggage', 'bags', 'bag', 'suitcase'] },
    { title: 'Concierge Service', department: 'Concierge', keywords: ['taxi', 'reservation', 'concierge', 'directions', 'recommendation'] },
    { title: 'Late Checkout Request', department: 'Front Desk', keywords: ['late checkout', 'check out', 'checkout'] },
  ];

  const matches = rules
    .filter((rule) => rule.keywords.some((keyword) => lower.includes(keyword)))
    .map((rule) => ({
      title: rule.title,
      department: rule.department,
      priority: rule.department === 'Maintenance' && priority === 'Medium' ? 'High' : priority,
      room,
    }));

  if (matches.length) return dedupeTasks(matches);
  return [{
    title: 'General Guest Request',
    department: 'Front Desk',
    priority,
    room,
  }];
}

function findRoom(text) {
  const match = text.match(/(?:room|guest in|guest from)\s*#?(\d{2,4})/i);
  return match ? match[1] : 'Unknown';
}

function inferPriority(text) {
  if (/(urgent|immediately|as soon as possible|asap|flood|leak|broken|no power|no air|medical|sick)/i.test(text)) return 'High';
  if (/(waiting|delay|soon|uncomfortable|concerned|complaint)/i.test(text)) return 'Medium';
  return 'Normal';
}

function dedupeTasks(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.title}-${item.room}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function escapeHTML(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function bindIcons(scope) {
  scope.querySelectorAll('[data-icon]').forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || '';
  });
}

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [...seedTasks];
  } catch {
    return [...seedTasks];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function toast(message) {
  const node = document.getElementById('toast');
  node.textContent = message;
  node.classList.add('show');
  setTimeout(() => node.classList.remove('show'), 1800);
}

function updateClock() {
  const clock = document.getElementById('guestClock');
  if (clock) clock.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

init();
