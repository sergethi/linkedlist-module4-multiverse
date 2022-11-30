class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

class LinkedList:
  def __init__(self):
    self.head = None
    self.tail = None
    
  def push(self, val):
    newNode = Node(val)
    if self.head == None:
      self.head = newNode
      self.tail = newNode
    else:
      self.tail.next = newNode
      self.tail = newNode
    #print('pushed value is', newNode.val)
    return newNode

  def pop(self):
    if self.head and self.head.next == None:
      self.head = None
      self.tail = None

    cur = self.head
    while cur:
      if cur.next == self.tail:
        cur.next = None
        cur = self.tail
      cur = cur.next
      
    

  def displayList(self):
    cur = self.head
    while cur:
      print(cur.val)
      cur = cur.next



newList = LinkedList()
newList.push(2)
newList.push(10)
newList.push(7)
newList.push(13)
newList.push(33)
newList.pop()
newList.displayList()
   
    
    