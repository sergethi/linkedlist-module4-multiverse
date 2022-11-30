
class Node {
    // Your code here!
    constructor (data) {
        this.value = data
        this.next = null
        this.previous = null
    }
  }
  
  class LinkedList {
    // Your code here!
    constructor () {
        this.head = null
        this.tail = null
  
    }
    addToTail(val){
        let newNode = new Node(val)
        this.tail = newNode
        this.tail.next = null
        return this.tail.value
        // if (this.tail === null){
        //     this.tail = newNode
        //     return this.tail.value
        // }
        // let cur = this.head
        // while(cur){
        //     if (cur === this.tail){
        //         cur.next = newNode
        //         tail = newNode
        //         newNode.next = null
        //     }
        //     cur = cur.next
        // }
        
        // let prev = this.tail
        // this.tail.next = newNode
        // this.tail = newNode
        // this.tail.previous = prev
        // return this.tail.value
    

        // if(this.head.next === null){
        //     this.tail = this.head
        // }
        // else{
        //     prev = this.tail
        //     this.tail.next = newNode
        //     this.tail = newNode
        //     this.tail.previous = prev
        // }
    }
    addToHead(val){
        let newNode = new Node(val)
        if (this.head === null){
            newNode.previous = null
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head.previous = newNode
            this.head = newNode
            return this.head.value
        }

    }
    removeTail(){
        if (this.tail === null){
            return null
        }
        // if(this.head.next === null){
        //     let oldHead = this.head
        //     this.head = null
        //     this.tail = null
        //     return oldHead
        // }
        let cur = this.head
        let removed = null
        while(cur){
            if (cur.next === this.tail){
                removed = cur.next
                cur.next = null
                cur = this.tail
            }
            cur = cur.next
        }
        return removed
    }
  }
  
  module.exports = {
    Node,
    LinkedList
  }