<?php
use PHPUnit\Framework\TestCase;

class dataTest extends TestCase{

	/**
	 * @dataProvider additionProvider
	 */
	public function testAdd($a, $b, $expected){
		$this->assertSame($expected, $a + $b);
	}

	public static function additionProvider(){
		return [
			[0,0,0],
			[0,1,1],
			[1,0,1],
			[1,2,3]
		];
	}
}
?>