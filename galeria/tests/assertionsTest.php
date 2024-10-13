<?php
use PHPUnit\Framework\TestCase;
require_once("divide.php");
require_once("Adding.php");

class assertionsTest extends TestCase{
	public function testExampleArrays(){
		$this->assertArrayHasKey("foo", ["foo"=>"baz"]);
		$this->assertContains(2, [1,2,3,4]);
		$this->assertContainsOnly("string", ["1","2","3"]);
		$this->assertContainsOnlyInstancesOf(Divide::class, [new Divide(), new Divide(), new Divide()]);
		$this->assertCount(1, ["one"]);
	}
	public function testExampleInstances(){
		$this->assertInstanceOf(Adding::class, new Adding());
		$this->assertObjectHasProperty("static_attr", new Adding());
	}

	public function testComparators(){
		$this->assertGreaterThan(2,1, "El segundo no es mayor que el primero");
		$this->assertGreaterThanOrEqual(1, 1, "No es mayor o igual");
		$this->assertLessThan(2, 1, "El segundo no es mayor que el primero");
		$this->assertLessThanOrEqual(2, 2);
		$this->assertEquals(0, null);  //Sí pero assertSame(0, null); no lo es.
		$this->assertNotEquals(2, 3);
		$this->assertSame(new DateTime(), new DateTime());
	}

	public function testEmpty(){
		$this->assertEmpty([]);
		$this->assertEmpty("");
		$this->assertEmpty(0);
		$this->assertNull(null);
		$this->assertNull(0);
		$this->assertNull("");
	}

	public function testFile(){
		$this->assertFileEquals("adding.php", "adding.php");
		$this->assertFileExists("dataTest.php");
		$this->assertJsonFileEqualsJsonFile("composer.json", "composer.json");
		$this->assertXmlFileEqualsXmlFile("phpunit.xml", "phpunit.xml");
	}
}
?>