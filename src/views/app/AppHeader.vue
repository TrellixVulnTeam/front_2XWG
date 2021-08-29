<template>
  <header class="AppHeader">
    <div class="AppHeader__navBar">
      <div class="AppHeader__logo">
        <router-link
          class="AppHeader__logLink"
          :to="{ name: 'ManagementStructure' }"
        >
          <img
            class="AppHeader__logoImg"
            src="@/assets/images/Logo.svg"
            alt="Logo"
          />
        </router-link>
      </div>
      <nav class="AppHeader__nav">
        <router-link class="AppHeader__navLink" :to="{ name: 'Reports' }"
          >Отчеты</router-link
        >
        <router-link
          class="AppHeader__navLink"
          :to="{ name: 'ManagementStructure' }"
          >Структура</router-link
        >
        <router-link class="AppHeader__navLink" :to="{ name: 'Potential' }"
          >Потенциал</router-link
        >
      </nav>
      <div class="AppHeader__profile">
        <p class="AppHeader__profileName">Филимонов Антон Васильевич</p>
        <img
          class="AppHeader__profileAvatar"
          src="@/assets/images/Avatar.png"
          alt="Avatar"
        />
      </div>
    </div>
    <div class="AppHeader__workBar">
      <div class="AppHeader__buttonWrapper">
        <button class="AppHeader__button">Создать задачу</button>
      </div>
      <div class="AppHeader__search">
        <input
          class="AppHeader__searchInput"
          placeholder="Поиск по специализации, отделу, имени или задаче"
        />
        <button class="AppHeader__searchButton">
          <img src="@/assets/images/Search.svg" alt="Search" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="sass">
@import "~@/assets/styles/components/button.mixin"

.AppHeader
  &__navBar, &__workBar
    display: flex
    justify-content: space-between
    padding: 0 $page-padding

  &__navBar
    background: $header-color
    height: 60px
    align-items: center

  &__workBar
    background: #fff
    height: 70px

  &__logo
    height: 18px

  &__navLink
    color: #fff
    padding: 0 15px
    text-decoration: none
    font-weight: normal
    position: relative
    transition: 0.3s
    font-size: 16px

    &:after
      content: ""
      position: absolute
      bottom: -10px
      left: 30%
      width: 0%
      height: 2px
      background: #fff
      transition: 0.3s

    &.router-link-active:after
      width: 40%

    &:hover
      opacity: 0.6

  &__profile
    display: flex
    align-items: center

  &__profileName
    color: #fff
    font-weight: 500
    margin-right: 34px
    font-size: 14px

  &__button
    @include button(11px, 36px, 8px, #096DD9, #007BFF)
    font-size: 17px
    font-weight: 700

  &__buttonWrapper
    display: flex
    align-items: center

  &__search
    width: 500px
    position: relative
    display: flex
    align-items: center

  &__searchInput
    height: 40px
    border-radius: 8px
    border: 1px solid #BFBFBF
    width: 100%
    padding: 11px 38px 11px 13px
    font-size: 14px

  &__searchButton
    position: absolute
    right: 0
    background: none
    border: none
    right: 5px
</style>
