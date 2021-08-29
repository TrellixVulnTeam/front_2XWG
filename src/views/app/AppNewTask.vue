/* eslint-disable no-irregular-whitespace */
<template>
  <div class="AppNewTask">
    <div class="AppNewTask__header">
      <p class="AppNewTask__headerText">Создать задачу</p>
      <div class="AppNewTask__close">
        <img
          class="AppNewTask__closeImg"
          src="@/assets/images/Close.svg"
          alt="Close"
        />
      </div>
    </div>
    <div class="AppNewTask__fields">
      <div class="AppNewTask__description">
        <p class="AppNewTask__title">Описание</p>
        <input
          class="AppNewTask__input"
          type="text"
          placeholder="Что нужно сделать?"
        />
      </div>
      <div class="AppNewTask__worker">
        <p class="AppNewTask__title">Исполнитель:</p>
        <select class="AppNewTask__select">
          <option>Автоматически</option>
        </select>
      </div>
      <div class="AppNewTask__worker">
        <p class="AppNewTask__title">Категория:</p>
        <select class="AppNewTask__select">
          <option>Выбрать категорию</option>
        </select>
        <p class="AppNewTask__additionalInformation">
          Категория будет определяться системой автоматически в фоне на
          основании указаний в заявление от жителя, плюс на основе анализа
          содержательной части текста.
        </p>
      </div>
      <div class="AppNewTask__acuracy">
        <p class="AppNewTask__title">Точность:</p>
        <select class="AppNewTask__select">
          <option>До сотрудника</option>
          <option>До руководителя</option>
        </select>
        <p class="AppNewTask__additionalInformation">
          Категоризатор будет прогнгзировать точность, можно ли назначить задачу
          сразу на конкретного сотрудника. Если нет, то на ближайщего к
          исполнителю руководителя.
        </p>
      </div>
    </div>
    <button class="AppNewTask__button">Продолжить</button>
  </div>
</template>

<script>
export default {
  name: "AppNewTask",
};
</script>
