function formatTreeData(data,id,pid){
	if(data && data.rows.length > 0){
		const rows = data.rows;
		let tempArr = [];
		let treeData = [];
		for(let i = 0,l = rows.length;i < l;i++){
			rows[i]['isExpend'] = false
			tempArr[rows[i].id] = rows[i] 
		}
		for(let i = 0,l = rows.length;i < l;i++){
			if(tempArr[rows[i][pid]] && rows[i][id] != rows[i][pid]){
				if(!tempArr[rows[i][pid]]['children']){
					tempArr[rows[i][pid]]['children'] = []
				}

				tempArr[rows[i][pid]]['children'].push(rows[i]);
			}else{
				treeData.push(rows[i])
			}
		}
		sortTreeDataArray(treeData);
		return treeData;
	}
}

function sortTreeDataArray(treeData){
	if (treeData && treeData.length > 0) {
      treeData.sort(function(a, b) {
        return a.sequence - b.sequence;
      });
      treeData.forEach((item,index) => {
      	if (item.children && item.children.length > 0) {
          sortTreeDataArray(item.children);
        }
      })
    }
}

export default {
	formatTreeData:formatTreeData
}