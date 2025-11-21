// 注册
function register(){
  const u = document.getElementById('regUser').value.trim();
  const p = document.getElementById('regPass').value.trim();
  const p2 = document.getElementById('regPass2').value.trim();
  if(!u || !p) return alert('用户名和密码不能为空');
  if(p !== p2) return alert('两次密码不一致');
  localStorage.setItem('ropeUser', u);
  localStorage.setItem('ropePass', p);
  alert('注册成功！马上去登录');
  location.href = 'login.html';
}

// 登录
function login(){
  const u = document.getElementById('logUser').value.trim();
  const p = document.getElementById('logPass').value.trim();
  const savedU = localStorage.getItem('ropeUser');
  const savedP = localStorage.getItem('ropePass');
  if(u === savedU && p === savedP){
    alert('登录成功！');
    location.href = 'index.html';
  }else{
    alert('用户名或密码错误');
  }
}
