				<h1>Mainheading</h1>
				<div class="zForm zNice">
					<form  style="background:<?= $params['mboxbg']?>" class="<?= $params['class']?>">
						<div class="zForm-title">
							Form name
						</div>
						<p>Form text</p>
						<div class="zForm-row">
							<span class="zForm-label">qInput</span>
							<input type="text" class="myclass" value="" placeholder="Кол-во" name="input1" required="required" data-ztype="qInput"/>
						</div>
						<div class="zForm-row rightFormat">
							<div class="zForm-col">
								<label>
									<span class="zForm-label">input type="text"</span>
									<input type="email" class="myclass" value="" name="input2" required="required" />
								</label>
							</div>
							<div class="zForm-col">
								<span class="zForm-label">input type="file"</span>
								<input type="file" class="myclass" value="" name="file" required="required" />
							</div>
						</div>
						<div class="zForm-row">
							<div class="zForm-col">
								<label>
									<span class="zForm-label">input color icon</span>
									<input type="text" class="myclass" value="" name="input3" required="required" data-color="#f00" />
								</label>
							</div>
							<div class="zForm-col">
								<label>
									<span class="zForm-label">input image icon</span>
									<input type="text" class="myclass" phoneRU="phoneRU" value="" name="input8" required="required" data-image="images/t/formIcon1.png" />
								</label>
							</div>
						</div>
						<div class="zForm-row">
							<label>
								<input type="checkbox" class="myclass" value="" name="input4" required="required" />
								<span class="zForm-text">Чекбокс текст</span>
							</label>
						</div>
						<div class="zForm-row">
							<label class="zForm-inline">
								<input type="radio" class="myclass" value="1" name="input5" required="required" />
								<span class="zForm-text">Радио1</span>
							</label>
							<label class="zForm-inline">
								<input type="radio" class="myclass" value="2" name="input5" required="required" />
								<span class="zForm-text">Радио2</span>
							</label>
							<label class="zForm-inline">
								<input type="radio"  class="myclass" value="3" name="input5" required="required" />
								<span class="zForm-text">Радио3</span>
							</label>
						</div>
						<div class="zForm-row">
							<label>
								<span class="zForm-label">Textarea</span>
								<textarea required="required" class="myclass" name="tarea1" ></textarea>
							</label>
						</div>
						<div class="zForm-row leftFormat">
							<div class="zForm-col">
								<select name="select1" class="myclass1">
									<option data-color="#f00">1</option>
									<option data-image="images/t/formIcon1.png">2</option>
									<option>3</option>
								</select>
							</div>
							<div class="zForm-col">
								<select disabled name="select1" class="myclass2">
									<option>1</option>
									<option>1</option>
									<option>1</option>
								</select>
							</div>
						</div>
						<div class="zForm-row">
							<input type="submit" value="ok" class="myclass" />
							<input type="reset" value="reset" class="myclass" />
						</div>
						
					</form>
				</div>

				<?partial(
					array(
						'mytest'=>array(
							'test1',
							'test2'=>array(
								'innertest1',
								'innertest2'
							)
						),
						'mytest2'
					)
				)?>