import { describe, expect, test } from "vitest"
import { mount } from "@vue/test-utils"
import TodoApp from "../TodoApp.vue"

describe("todos form", () => {
  test("renders a todo", () => {
    const wrapper = mount(TodoApp)

    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe("Learn Vue.js 3")
  })

  test("creates a todo", async () => {
    const wrapper = mount(TodoApp)
    const input = wrapper.get('[data-test="new todo"]')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    await input.setValue("New Todo")
    await wrapper.get('[data-test="form"]').trigger("submit")

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
    expect(input.element.value).toBe("")
  })

  test("complete todo", async () => {
    const wrapper = mount(TodoApp)

    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

    expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed")
  })
})
