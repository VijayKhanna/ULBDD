package com.urbanladderbdd.Utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class PropertyFileReader {

	public static Properties LoadFile() throws IOException
	{
		//prop=new Properties();
		FileInputStream fis=new FileInputStream("C:\\Users\\mylaptop\\eclipse-workspace\\Practise\\UrbanLadderBDD\\configurationFiles\\config.properties");
		//return fis;

		
		Properties prop=new Properties();
		prop.load(fis);
		return prop;
	}
}
