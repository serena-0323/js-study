/**
 * 
 */
 function addItem(){
	
	//입력값을 읽어와 todo변수에저장
	let todo = document.getElementById("item");
	//ul 요소를 참조하여 list변수에 저장
	let list = document.getElementById("todolist");
	//새로운 li요소를 생성하여 listitem 변수에 저장
	let listitem = document.createElement("li");
	//todolist 출력되는 곳에 css 입힌거
	listitem.className="d-flex list-group-item list-group-item-action list-group-item-warning";
	
	//li 요소에 들어갈 X 버튼을 생성할거시다
		let xbtn = document.createElement("button");
	
	//x버튼에 css 적용
	xbtn.className = "btn-close ms-auto";
	
	//X버튼에 click 이벤트 발성하면 
	xbtn.onclick = function(e){
		// 이벤트가 발생한 li요소를 target지정해서 pnode에 저장함
		let pnode = e.target.parentNode;
		//ul요소에서 pnode를 삭제
		list.removeChild(pnode);
	}
	
	//입력되는 값을 생성된 li 요소에 text 값으로 넣어주기
	listitem.innerText = todo.value;
	
	//li에 버튼을 자식으로 입적
	listitem.appendChild(xbtn);
	
	//입력된 값을 가지고 있는 새로 생성된 li 요소를 ul의 양자로 입적시킴
	list.appendChild(listitem);
	
	
	todo.value = "";
	todo.focus();
}