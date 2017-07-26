/**
 * 简单的拖拽组件
 * 用法：v-dragging="{item:oneClass,list:classList,group:'lxm',type:'dragstart'}"
 * item：拖拽元素的数据对象
 * list：拖拽元素所属数组对象
 * group：分组，拖拽被限制在分组之内
 * type：拖拽的效果，有两个值，dragstart-连续交换，路过的每一个元素都进行交换，dragend-最后放下时交换，起止元素交换位置
 * liaoxm by 2017.3.15
 */
const Map = require('es6-map')

class DragData {
	constructor() {
		this.data = {}
	}

	new(key) {
		if(!this.data[key]) {
			this.data[key] = {
				className: '',
				Current: {
					index: 0,
					item: null,
					el: null,
					indexTo: 0
				},
				List: [],
				EL_MAP: new Map()
			}
		}
		return this.data[key]
	}

	get(key) {
		return this.data[key]
	}
}
const $dragging = {
	listeners: {
		dragged: []
	},
	$on(event, func) {
		this.listeners[event].push(func)
	},
	$once(event, func) {
		const vm = this

		function on() {
			vm.$off(event, on)
			func.apply(vm, arguments)
		}
		this.$on(event, on)
	},
	$off(event, func) {
		if(!func) {
			this.listeners[event] = []
			return
		}
		this.listeners[event].$remove(func)
	},
	$emit(event, context) {
		this.listeners[event].forEach(func => {
			func(context)
		})
	}
}

const _ = {
	on(el, type, fn) {
		el.addEventListener(type, fn)
	},
	off(el, type, fn) {
		el.removeEventListener(type, fn)
	},
	addClass(el, cls) {
		if(arguments.length < 2) {
			el.classList.add(cls)
		} else {
			for(let i = 1, len = arguments.length; i < len; i++) {
				el.classList.add(arguments[i])
			}
		}
	},
	removeClass(el, cls) {
		if(arguments.length < 2) {
			el.classList.remove(cls)
		} else {
			for(let i = 1, len = arguments.length; i < len; i++) {
				el.classList.remove(arguments[i])
			}
		}
	}
}

export default function(Vue, options) {
	const isPreVue = Vue.version.split('.')[0] === '1'
	const dragData = new DragData()

	function handleDragStart(e) {
		const el = getBlockEl(e.target)
		const key = el.getAttribute('drag_group')
		const DDD = dragData.new(key)
		const item = DDD.EL_MAP.get(el)
		const index = DDD.List.indexOf(item)

		_.addClass(el, 'dragging')

		if(e.dataTransfer) {
			e.dataTransfer.effectAllowed = 'move'
			e.dataTransfer.setData('text', JSON.stringify(item))
		}

		DDD.Current = {
			index: index,
			item: item,
			el: el
		}
	}

	function handleDragOver(e) {
		if(e.preventDefault) {
			e.preventDefault()
		}
		return false
	}

	function handleDragEnter(e) {
		let el
		if(e.type === 'touchmove') {
			e.stopPropagation()
			e.preventDefault()
			el = getOverElementFromTouch(e)
			el = getBlockEl(el)
		} else {
			el = getBlockEl(e.target)
		}

		if(!el) return

		const key = el.getAttribute('drag_group')
		const DDD = dragData.new(key)

		if(!DDD.Current.el || !DDD.Current.item) return

		if(el === DDD.Current.el) return

		let item = DDD.EL_MAP.get(el)
		let indexTo = DDD.List.indexOf(item)
		let indexFrom = DDD.List.indexOf(DDD.Current.item)
//		console.log('item' + item + ' indexTo:' + indexTo + ' indexFrom:' + indexFrom)
		DDD.Current.indexTo = indexTo
//		console.log('DDD.value.type:' + DDD.value.type);
		if(DDD.value.type && DDD.value.type === 'dragstart') {
			swapArrayElements(DDD.List, indexFrom, indexTo)
			
			DDD.Current.index = indexTo
			DDD.value.indexTo = indexTo
			DDD.value.indexFrom = indexFrom
			$dragging.$emit('dragged', {
				draged: DDD.Current.item,
				to: item,
				value: DDD.value
			})
		}
	}

	function handleDragLeave(e) {
		_.removeClass(e.target, 'drag-over', 'drag-enter')
	}

	function handleDrag(e) {}

	function handleDragEnd(e) {
		let el
		if(e.type === 'touchmove') {
			e.stopPropagation()
			e.preventDefault()
			el = getOverElementFromTouch(e)
			el = getBlockEl(el)
		} else {
			el = getBlockEl(e.target)
		}

		if(!el) return

		const key = el.getAttribute('drag_group')
		const DDD = dragData.new(key)

		if(!DDD.Current.el || !DDD.Current.item) return

		//		if(el === DDD.Current.el) return

		let item = DDD.EL_MAP.get(el)
		//		let indexTo = DDD.List.indexOf(item)
		let indexFrom = DDD.List.indexOf(DDD.Current.item)
		let indexTo = DDD.Current.indexTo
		if(indexTo === undefined || indexTo === indexFrom) {
			return
		}
//		console.log('dragend');
		if(!DDD.value.type || DDD.value.type === 'dragend') {
			swapArrayElements(DDD.List, indexFrom, indexTo)
			DDD.Current.index = indexTo
			DDD.value.indexTo = indexTo
			DDD.value.indexFrom = indexFrom
			$dragging.$emit('dragged', {
				draged: DDD.Current.item,
				to: item,
				value: DDD.value
			})
		}

		_.removeClass(getBlockEl(e.target), 'dragging', 'drag-over', 'drag-enter')
	}

	function handleDrop(e) {
		e.preventDefault()
		if(e.stopPropagation) {
			e.stopPropagation()
		}
		return false
	}

	function getBlockEl(el) {
		if(!el) return
		while(el.parentNode) {
			if(el.getAttribute('drag_block')) {
				return el
				break
			} else {
				el = el.parentNode
			}
		}
	}

	function swapArrayElements(items, indexFrom, indexTo) {
		let item = items[indexTo]
		if (item.sort != undefined) {
			let sort = items[indexFrom].sort
			items[indexFrom].sort = item.sort
			item.sort = sort
		}
		if(isPreVue) {
			items.$set(indexTo, items[indexFrom])
			items.$set(indexFrom, item)
		} else {
			Vue.set(items, indexTo, items[indexFrom])
			Vue.set(items, indexFrom, item)
		}
		return items
	}

	function getOverElementFromTouch(e) {
		const touch = e.touches[0]
		const el = document.elementFromPoint(touch.clientX, touch.clientY)
		return el
	}

	function addDragItem(el, binding, vnode) {
		const item = binding.value.item
		const list = binding.value.list

		const DDD = dragData.new(binding.value.group)

		DDD.value = binding.value
		DDD.List = list
		DDD.className = binding.value.className
		DDD.EL_MAP.set(el, item)

		el.setAttribute('draggable', 'true')
		el.setAttribute('drag_group', binding.value.group)
		el.setAttribute('drag_block', binding.value.group)

		_.on(el, 'dragstart', handleDragStart)
		_.on(el, 'dragenter', handleDragEnter)
		_.on(el, 'dragover', handleDragOver)
		_.on(el, 'drag', handleDrag)
		_.on(el, 'dragleave', handleDragLeave)
		_.on(el, 'dragend', handleDragEnd)
		_.on(el, 'drop', handleDrop)

		_.on(el, 'touchstart', handleDragStart)
		_.on(el, 'touchmove', handleDragEnter)
		_.on(el, 'touchend', handleDragEnd)
	}

	function removeDragItem(el, binding, vnode) {
		const DDD = dragData.new(binding.value.group)
		DDD.EL_MAP.delete(el)

		_.off(el, 'dragstart', handleDragStart)
		_.off(el, 'dragenter', handleDragEnter)
		_.off(el, 'dragover', handleDragOver)
		_.off(el, 'drag', handleDrag)
		_.off(el, 'dragleave', handleDragLeave)
		_.off(el, 'dragend', handleDragEnd)
		_.off(el, 'drop', handleDrop)

		_.off(el, 'touchstart', handleDragStart)
		_.off(el, 'touchmove', handleDragEnter)
		_.off(el, 'touchend', handleDragEnd)
	}

	Vue.prototype.$dragging = $dragging

	if(!isPreVue) {
		Vue.directive('dragging', {
			bind: addDragItem,
			unbind: removeDragItem
		})
	} else {
		Vue.directive('dragging', {
			update(newValue, oldValue) {
				addDragItem(this.el, {
					modifiers: this.modifiers,
					arg: this.arg,
					value: newValue,
					oldValue: oldValue
				})
			},
			unbind(newValue, oldValue) {
				removeDragItem(this.el, {
					modifiers: this.modifiers,
					arg: this.arg,
					value: newValue ? newValue : {
						group: this.el.getAttribute('drag_group')
					},
					oldValue: oldValue
				})
			}
		})
	}
}