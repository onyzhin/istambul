<?
	define("__ROOT__",str_replace('\\', '/',$_SERVER['DOCUMENT_ROOT']));
	define("__FDIR__",str_replace('\\', '/', __DIR__));
	function gTab($ii){
		$st='';
		for ($i=0;$i<$ii;$i++)
			$st.="\t";
		return $st;
	}
	function partial($partials,$params=array()){
		$params = array_merge($params,array(
			'first' => true,
			'level' => 0
		));
		$first = $params['first'];
		$level = $params['level'];
		if ($first) echo "\n\r";
		if (is_string($partials)) $partials=array($partials);
		foreach($partials as $key=>$item){
			if (is_int($key)) $filename=$item;
			else $filename=$key;
			if (@is_file(__FDIR__.'/partials/'.$filename.'.php'))
				include __FDIR__.'/partials/'.$filename.'.php';
			else{
				echo gTab($level).'<div class="'.$filename.' undefinedBlock">'."\n\r";
				if (is_array($item)) 
					partial($item,array(
						'first' => false,
						'level' => $level+1
					));
				echo gTab($level).'</div><!--END OF '.$filename.'-->'."\n\r";
			}
		}
	};

	$udir='';
	if (substr(__FDIR__, 0, strlen(__ROOT__)) == __ROOT__) {
		$udir = ltrim(substr(__FDIR__, strlen(__ROOT__)),'/');
	}else{
		$udir = '/verstka';
	}


	$act=explode('?',$_SERVER['REQUEST_URI']);
	$act=ltrim($act[0],'/');
	if (substr($act, 0, strlen($udir)) == $udir) 
		$act=explode('.',ltrim(substr($act, strlen($udir)),'/'));
	$act=$act[0];
	if ($act=='') $act='index';

	if ($act=='lastmodified'){
		$responce=array();
		$files=$_REQUEST['input'];
		foreach($files as $key=>$item){
			if (substr($item['link'], 0, strlen($udir)) == $udir) 
				$item['link']=ltrim(substr($item['link'], strlen($udir)),'/');
			$lastmodified = @filemtime ( __FDIR__.'/'.$item['link']);
			if (time()-$lastmodified<2) array_push($responce, array('id'=>$key,'time'=>$lastmodified));
		}
		echo json_encode($responce);
		exit();
	}

	include 'header.php';
	if (is_file($act.'.php')) include $act.'.php';
	include 'footer.php';

?>