const tasks = [{
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function (arrOfTasks) {
  // Дані масиву task перетвоюємо у об'єкт об'єктів
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc
  }, {});

  const themes = {
    default: {
      '--base-text-color': '#212529',
      '--header-bg': '#007bff',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#007bff',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#0069d9',
      '--default-btn-border-color': '#0069d9',
      '--danger-btn-bg': '#dc3545',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#bd2130',
      '--danger-btn-border-color': '#dc3545',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#80bdff',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
    dark: {
      '--base-text-color': '#212529',
      '--header-bg': '#343a40',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#58616b',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#292d31',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#b52d3a',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#88222c',
      '--danger-btn-border-color': '#88222c',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
    light: {
      '--base-text-color': '#212529',
      '--header-bg': '#fff',
      '--header-text-color': '#212529',
      '--default-btn-bg': '#fff',
      '--default-btn-text-color': '#212529',
      '--default-btn-hover-bg': '#e8e7e7',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#f1b5bb',
      '--danger-btn-text-color': '#212529',
      '--danger-btn-hover-bg': '#ef808a',
      '--danger-btn-border-color': '#e2818a',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
  };
  let lastSelectedTheme = localStorage.getItem('app_theme') || 'default';


  // Elements UI
  const listContainer = document.querySelector('.tasks-list-section .list-group'); // сформовано контейнер для передавання сформованих <li> завдань
  const form = document.forms['addTask']; // шукаємо форму з атрибутом addTask
  const inputTitle = form.elements['title']; // знаходимо елементи введення у форму title
  const inputBody = form.elements['body']; // знаходимо елементи введення у форму body
  const themeSelect = document.getElementById('themeSelect'); // шукаємо клас форми вибору теми з id themeSelect


  // Events
  setTheme(lastSelectedTheme); // викликаємо функцію зміни теми
  renderAllTasks(objOfTasks); // викликаємо функцію renderAllTasks для виведення усіх завдань на html сторінку 
  form.addEventListener('submit', onFormsSubmitHandler); // викликаємо функцію onFormsSubmitHandler, яка оброблятиме нашу форм
  listContainer.addEventListener('click', onDeleteHandler); // викликаємо функцію onDeleteHandler, яка видалятиме завдання
  themeSelect.addEventListener('change', onThemeSelectHandler); // викликаємо функцію onThemeSelectHandler, що обробляє події зміни теми


  // Функція renderAllTasks, що виводить усі завдання на сторінку
  function renderAllTasks(taskList) {

    if (!taskList) {
      console.error("Передайте список завдань!");
      return;
    }; // перевіряємо чи передано список завдань

    //   
    const fragment = document.createDocumentFragment();
    Object.values(taskList).forEach(task => {
      const li = listItemTemplate(task); // перетворюємо об'єкт завдань у масив і перебераємо кожен елемент завдань для формування <li>
      fragment.appendChild(li); // передаємо до fragment створену у функції listItemTemplate <li>
    });
    listContainer.appendChild(fragment);
  };

  // Функція listItemTemplate, що формує перелік елементів <li> для темплейта завдань
  function listItemTemplate({
    _id,
    title,
    body
  } = {}) {
    const li = document.createElement('li'); // створюємо <li>
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'flex-wrap',
      'mt-2'
    ); // додаємо класи до <li>
    li.setAttribute('data-task-id', _id); // присвоюємо <li> атрибут з id

    const span = document.createElement('span'); // створюємо <span>
    span.textContent = title; // <span> задаємо title
    span.style.fontWeight = 'bold'; // задаємо жирний текст для <span>

    const deleteBtn = document.createElement('button'); // створюємо кнопку
    deleteBtn.textContent = 'Delete' // додаємо кнопці текстовий зміст
    deleteBtn.classList.add(
      'btn',
      'btn-danger',
      'ml-auto',
      'delete-btn'
    ); // додаємо кнопці класи

    const article = document.createElement('p'); // створюємо <p>
    article.textContent = body; // <p> задаємо body
    article.classList.add(
      'mt-2',
      'w-100'
    ); // додаємо класи для <p>

    // додаємо створені елементи <span>, <deleteBt>, <article> в <li>
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);

    return li;
  };

  // Функція onFormsSubmitHandler, що обробляє нашу форму
  function onFormsSubmitHandler(e) {
    e.preventDefault(); // необхідно для того, щоб не перезавантажувалась стрінка при відправлені даних форми
    const titleValue = inputTitle.value; // отримуємо введені дані title
    const bodyValue = inputBody.value; // отримуємо введені дані body

    if (!titleValue || !bodyValue) {
      alert('Будь ласка, введіть title і body !!!');
      return;
    }
    const task = createNewTask(titleValue, bodyValue); // викликаємо функцію створення нового завдання
    const listItem = listItemTemplate(task); // передаємо нове створене завдання з елементами у <li>
    listContainer.insertAdjacentElement('afterbegin', listItem); // додаємо створену <li> із новим завданням у контейнер на початок нових завдань
    form.reset(); // очищуємо поля форми
  };

  // Функція createNewTask, що створює нове завдання
  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`
    };
    objOfTasks[newTask._id] = newTask; // додаємо створене завдання до objOfTasks
    return {
      ...newTask
    };
  };

  // Функція deleteTask, що видаляє завдання
  function deleteTask(id) {
    const {
      title
    } = objOfTasks[id]; // визначаємо title за id завданням
    const isConfirm = confirm(`Ви впевнені, що хочете видалити завдання: ${title} ?`);
    if (!isConfirm) return isConfirm; // якщо isConfirm false, то вертаємо isConfirm
    delete objOfTasks[id]; // в іншому випадку видаляємо завдання з переданим id
    return isConfirm;
  };

  // Функція deleteTaskFromHtml, що видаляє завдання з html розмітки 
  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
  };

  // Функція onDeleteHandler, що обробляє завдання для видалення
  function onDeleteHandler({
    target
  }) {
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]'); // визначаємо завдання, що необхідно видалити
      const id = parent.dataset.taskId; // визначаємо id завдання, що необхідно видалити
      const confirmed = deleteTask(id); // викликаємо функцію видалення завдання
      deleteTaskFromHtml(confirmed, parent);
    };
  };

  // Функція onThemeSelectHandler, що обробляє подію зміни themeSelect
  function onThemeSelectHandler(e) {
    const selectedTheme = themeSelect.value;
    const isConfirmed = confirm(
      `Ви дійсно бажаєте змінити тему: ${selectedTheme}`,
    );
    if (!isConfirmed) {
      themeSelect.value = lastSelectedTheme;
      return;
    }
    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
    localStorage.setItem('app_theme', selectedTheme);
  };

  // Функція setTheme, що встановлює тему
  function setTheme(name) {
    const selectedThemObj = themes[name];
    Object.entries(selectedThemObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };
})(tasks);