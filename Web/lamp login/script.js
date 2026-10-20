(() => {
  const root   = document.documentElement;
  const body   = document.body;
  const head   = document.getElementById('head');
  const pivot  = document.getElementById('pivot');
  const cord   = document.getElementById('cord');
  const power  = document.getElementById('power');
  const card   = document.getElementById('card');
  const swatches = [...document.querySelectorAll('.swatch')];

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setLamp(on) {
    body.classList.toggle('on', on);
    body.classList.toggle('off', !on);
    power.setAttribute('aria-pressed', on);
    cord.setAttribute('aria-pressed', on);
    cord.setAttribute('aria-label', on ? 'Pull the cord to turn the lamp off' : 'Pull the cord to turn the lamp on');
    card.inert = !on;
    if (on) setTimeout(() => document.getElementById('user').focus({ preventScroll: true }), 700);
  }

  function pullCord() {
    cord.classList.add('pulled');
    setTimeout(() => cord.classList.remove('pulled'), 180);
    setLamp(!body.classList.contains('on'));
  }

  cord.addEventListener('click', pullCord);
  cord.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pullCord(); }
  });
  power.addEventListener('click', () => setLamp(!body.classList.contains('on')));

  /* ---------- Colour themes ---------- */
  swatches.forEach(s => s.addEventListener('click', () => {
    root.style.setProperty('--lamp', s.dataset.color);
    root.style.setProperty('--lamp-rgb', s.dataset.rgb);
    swatches.forEach(o => o.setAttribute('aria-pressed', o === s));

  }));

  const REST = -25;       
  let current = REST, target = REST;

  addEventListener('pointermove', e => {
    if (!body.classList.contains('on')) return;
    const r  = pivot.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const a  = Math.atan2(-dx, dy) * 180 / Math.PI;   
    target = Math.max(-55, Math.min(55, a));
  });

  function tick() {
    const goal = body.classList.contains('on') ? target : 10; 
    current = reduceMotion ? goal : current + (goal - current) * 0.12;
    head.setAttribute('transform', `translate(110 140) rotate(${current.toFixed(2)})`);
    requestAnimationFrame(tick);
  }
  tick();


  const tabs      = document.querySelector('.tabs');
  const tabLogin  = document.getElementById('tabLogin');
  const tabReg    = document.getElementById('tabRegister');
  const title     = document.getElementById('title');
  const subtitle  = document.getElementById('subtitle');
  const submit    = document.getElementById('submit');
  const pass      = document.getElementById('pass');
  const status    = document.getElementById('status');
  let mode = 'login';

  function setMode(next) {
    if (next === mode) return;
    mode = next;
    const login = mode === 'login';
    tabs.dataset.active = mode;
    tabLogin.setAttribute('aria-selected', login);
    tabReg.setAttribute('aria-selected', !login);
    title.textContent    = login ? 'Welcome' : 'Sign Up';
    subtitle.textContent = login ? 'Sign in to continue to your account' : 'Create an account to get started';
    submit.textContent   = login ? 'Sign in' : 'Create account';
    pass.autocomplete    = login ? 'current-password' : 'new-password';
    status.textContent   = '';
    clearErrors();
  }
  tabLogin.addEventListener('click', () => setMode('login'));
  tabReg.addEventListener('click',   () => setMode('register'));

  /* ---------- Password visibility ---------- */
  const eye = document.getElementById('eye');
  eye.addEventListener('click', () => {
    const show = pass.type === 'password';
    pass.type = show ? 'text' : 'password';
    eye.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  });

  const form    = document.getElementById('form');
  const user    = document.getElementById('user');
  const userErr = document.getElementById('userErr');
  const passErr = document.getElementById('passErr');

  function setError(input, box, msg) {
    input.closest('.group').classList.toggle('invalid', !!msg);
    input.setAttribute('aria-invalid', !!msg);
    box.textContent = msg;
  }
  function clearErrors() { setError(user, userErr, ''); setError(pass, passErr, ''); }

  [user, pass].forEach(i => i.addEventListener('input', clearErrors));

  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();
    status.textContent = '';

    const u = user.value.trim();
    let ok = true;
    if (u.length < 3) { setError(user, userErr, 'Enter at least 3 characters.'); ok = false; }
    if (pass.value.length < 6) { setError(pass, passErr, 'Use at least 6 characters.'); ok = false; }
    if (!ok) return;

    // Demo only – connect your backend here.
    status.textContent = mode === 'login' ? `Signed in as ${u}.` : `Account created for ${u}.`;
  });

  document.getElementById('forgot').addEventListener('click', e => {
    e.preventDefault();
    status.textContent = 'Password reset is not connected in this demo.';
  });

  document.querySelectorAll('.social button').forEach(b =>
    b.addEventListener('click', () => { status.textContent = `${b.dataset.p} sign-in is not connected in this demo.`; })
  );

  setLamp(false);
})();