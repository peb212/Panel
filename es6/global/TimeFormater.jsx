/**
 * 模块名： TimeFormater
 * @authors zhengqp (strongiron@qq.com)
 * @date    2016-08-13 23:05:58
 * @version 0.0.1
 */
const $NUM_MINUTE=60;
const $NUM_HOUR=3600;
const $NUM_DAY=86400;
export default class TimeFormater
{
	/**
	 * [getLocalTime description]
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    {Number}                   millisecond [传入的豪秒数，不能小于0]
	 * @param    {String}                   formatStr   [格式为：“#y年#m月#d日”，y,d,h,i,s为了性能只用小写且前面加#]
	 * @param    {Boolean}                  fillZero    [补全]
	 * @return   {String}                               [2016年08月13日]
	 */
	static getLocalTime(millisecond=0, formatStr="#y/#m/#d",fillZero=true)
	{
		if(millisecond<0)
		{
			if(GlobalStaticConfing.isDebug)
				throw new Error("参数错误!");
			else
				return "";
		}
		if(!formatStr)
			formatStr = "#y-#m-#d";
		formatStr+="";	
		fillZero = !!fillZero;
		
		var millisec=millisecond;
		var $liveData =new Date(millisec);
		var lowerStr=formatStr;
		/*当前时间单位索引  */
		var $iSecond=lowerStr.indexOf('#s');
		var $iMinute=lowerStr.indexOf('#i');
		var $iHour=lowerStr.indexOf('#h');
		var $iDay=lowerStr.indexOf('#d');
		var $iMonth=lowerStr.indexOf('#m');
		var $iYear=lowerStr.indexOf('#y');

		/*当前时间  */
		var $liveDay=$liveData.getDate();
		var $liveHour=$liveData.getHours();
		var $liveMinute=$liveData.getMinutes();
		var $liveSecond=$liveData.getSeconds();
		var $liveMilliSecond=$liveData.getMilliseconds();
		var $liveMonth=$liveData.getMonth();
		var $liveYear=$liveData.getFullYear();
		/*当前时间字符串  */
		var $sSecond = "";
		var $sMinute = "";
		var $sHour = "";
		var $sDay = "";
		var $sMonth = "";
		var $sYear;
		/*year  */
		if ($iYear >= 0)
		{
			$sYear=String($liveYear);
			lowerStr=lowerStr.replace('#y', $sYear);
		}
		/*month  */
		if ($iMonth >= 0)
		{	
			if(fillZero)
				$sMonth=$liveMonth + 1 < 10 ? '0' : '';
			$sMonth+=String($liveMonth + 1);
			lowerStr=lowerStr.replace('#m', $sMonth);
		}
		/*day  */
		if ($iDay >= 0)
		{
			if(fillZero)
				$sDay=$liveDay < 10 ? '0' : '';
			$sDay+=String($liveDay);
			lowerStr=lowerStr.replace('#d', $sDay);
		}
		/*  */
		if ($iHour >= 0)
		{
			if(fillZero)
				$sHour=$liveHour < 10 ? '0' : '';
			if ($sDay == null && $liveHour <= 0 && $sMinute == null && $liveMinute > 0)
			{
				$sHour+='1';
			}
			else
			{
				$sHour+=$liveHour;
			}
			lowerStr=lowerStr.replace('#h', $sHour);
		}
		/*  */
		if ($iMinute >= 0)
		{
			if(fillZero)
				$sMinute=$liveMinute < 10 ? '0' : '';
			if ($iHour < 0 && $iSecond < 0 && $liveMinute <= 0 && $liveSecond > 0)
			{
				$sMinute+='1';
			}
			else
			{
				$sMinute+=$liveMinute;
			}
			lowerStr=lowerStr.replace('#i', $sMinute);
		}
		/*  */
		if ($iSecond >= 0)
		{
			if(fillZero)
				$sSecond=$liveSecond < 10 ? '0' : '';
			if ($iMinute < 0 && $liveSecond <= 0 && $liveMilliSecond > 0)
			{
				$sSecond+='1';
			}
			else
			{
				$sSecond+=$liveSecond;
			}
			lowerStr=lowerStr.replace('#s', $sSecond);
		}

		return lowerStr;
			
	}

	/**
	 * [countTimeFormatter description]
	 * @Author   zhengqp(strongiron@qq.com)
	 * @DateTime 2016-08-13
	 * @param    {Number}                   millisecond [要格式化的豪秒数,如果小于0，就等于0]
	 * @param    {String}                   formatStr   [格式为：“#d天#h时#i分#s秒”，
	 * d,h,i,s为了性能只用小写且前面加#，单位可自己定义即“天时分秒”可以是除#号外的其它字符，
	 * 可自定义只显示#h时#i分或#i分#s秒]
	 * @param    {Boolean}                  keepZero    [保留0]
	 * @param    {Boolean}                  fillZero    [补全]
	 * @return   {[type]}                               [10:10:10]
	 */
	static countTimeFormatter(millisecond=0, formatStr="#h:#i:#s",keepZero=true,fillZero=true)
	{
		var $liveData=millisecond > 0 ? millisecond / 1000 : 0;
		var lowerStr=formatStr;

		/*当前时间单位  */
		var $iSecond=lowerStr.indexOf('#s');
		var $iMinute=lowerStr.indexOf('#i');
		var $iHour=lowerStr.indexOf('#h');
		var $iDay=lowerStr.indexOf('#d');

		/*当前时间  */
		var $liveDay=$liveData / $NUM_DAY;
		if ($iDay >= 0)
			$liveData-=$liveDay * $NUM_DAY;
		var $liveHour=$liveData / $NUM_HOUR;
		if ($iHour >= 0)
			$liveData-=$liveHour * $NUM_HOUR;
		var $liveMinute=$liveData / $NUM_MINUTE;
		if ($iMinute >= 0)
			$liveData-=$liveMinute * $NUM_MINUTE;
		var $liveSecond=$liveData;
		$liveData*=1000;
		var $liveMilliSecond=$liveData;
		/*当前时间字符串  */
		var $sSecond="";
		var $sMinute="";
		var $sHour="";
		var $sDay="";
		if ($iDay >= 0)
		{
			if(fillZero)
				$sDay=$liveDay < 10 ? '0' : '';
				
			if ($iHour < 0 && $iMinute < 0 && $iSecond < 0 && $liveHour > 0&&$liveDay<=0)
			{
				$sDay+='1';
			}
			else
			{
				$sDay+=$liveDay;
			}
			if(($sDay!="00"&&$sDay!="0")||keepZero)
				lowerStr=lowerStr.replace('#d', $sDay);
			else
			{
				lowerStr=lowerStr.substr(lowerStr.indexOf("#h"));
				$sDay="";
			}
		}
		if ($iHour >= 0)
		{
			if(fillZero)
				$sHour=$liveHour < 10 ? '0' : '';
			if ( $iMinute < 0&&  $liveHour <= 0 && $liveMinute > 0)
			{
				$sHour+='1';
			}
			else
			{
				$sHour+=$liveHour;
			}
			if(($sHour!="00"&&$sHour!="0")||keepZero||$sDay!="")
				lowerStr=lowerStr.replace('#h', $sHour);
			else
			{
				lowerStr=lowerStr.substr(lowerStr.indexOf("#i"));
				$sHour="";
			}
		}
		if ($iMinute >= 0)
		{
			if(fillZero)
				$sMinute=$liveMinute < 10 ? '0' : '';
			if ($iSecond < 0 && $liveMinute <= 0 && $liveSecond > 0)
			{
				$sMinute+='1';
			}
			else
			{
				$sMinute+=$liveMinute;
			}
			if(($sMinute!="00"&&$sMinute!="0")||keepZero||$sHour!="")
				lowerStr=lowerStr.replace('#i', $sMinute);
			else
				lowerStr=lowerStr.substr(lowerStr.indexOf("#s"));
		}
		if ($iSecond >= 0)
		{
			if(fillZero)
				$sSecond=$liveSecond < 10 ? '0' : '';
			if ($iMinute < 0 && $liveSecond <= 0 && $liveMilliSecond > 0)
			{
				$sSecond+='1';
			}
			else
			{
				$sSecond+=$liveSecond;
			}
			lowerStr=lowerStr.replace('#s', $sSecond);
		}

		return lowerStr;
	}
}
