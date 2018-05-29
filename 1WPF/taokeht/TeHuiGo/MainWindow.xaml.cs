using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Collections;
using System.Security.Permissions;
using System.Windows.Threading;

namespace TeHuiGo
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {
      
        public MainWindow()
        {
            InitializeComponent();
        }

        class HObject
        {
            public string category;//商品ID
            public string commission_rate;//商品ID
            public string coupon_click_url;//商品ID
            public string coupon_end_time;//商品ID
            public string coupon_info;//商品ID
            public string coupon_remain_count;//商品ID
            public string coupon_start_time;//商品ID
            public string coupon_total_count;//商品ID
            public string item_description;//商品ID
            public string item_url;//商品ID
            public string nick;//商品ID
            public string num_iid;//商品ID
            public string pict_url;//商品ID
            public string seller_id;//商品ID
            public object small_images;//商品ID
            public string shop_title;//商品ID
            public string title;//商品ID
            public string user_type;//商品ID
            public string zk_final_price;//商品ID
            public string volume;//商品ID
	 
        }
        //tab页面独家优惠后台数据操作界面逻辑事件开始
        //************************
        //************************
        //************************
        //************************
        //************************
        //************************
        //下载独家优惠后台的数据
   
        public ArrayList harrayBr = new ArrayList();
        private void Button_ClickT(object sender, RoutedEventArgs e)
        {
            if (harrayBr.Count > 0)
            {
                System.Windows.MessageBox.Show("请批量上传后再下载数据！");
            }
            else
            {

                string str = WebServiceApp("mode=getsplist");
                str = str.Remove(0, 1);
                str = str.Remove(str.Length - 1, 1);
                System.Windows.MessageBox.Show(str);
                str = "[{\"category\":\"16\",\"commission_rate\":\"31.50\",\"coupon_click_url\":\"https:\\/\\/uland.taobao.com\\/coupon\\/edetail?e=wnseIRjCB5cGQASttHIRqQxXm8u8EgxqgbzIdvXZ3YeEdvD4wwM%2BY8if7WgCqrcZH8Y0FavZdDFsfDFvPouq6RXE28CIXo6sDfqEFBOhTcyf8xUDqvu9RV5fEHKecADEinzyMiY7xOPto%2Ft4Ds4Ylf5UMDZ5eDKJo6DFoM4aJ1lUuqaOehQG5LEsC315c4LYhSW4NK0XiGaH6s3NfzeYtQ%3D%3D&traceId=0bfa98ea15275221283675583e\",\"coupon_end_time\":\"2018-06-02\",\"coupon_info\":\"\\u6ee199\\u5143\\u51cf50\\u5143\",\"coupon_remain_count\":\"11340\",\"coupon_start_time\":\"2018-05-27\",\"coupon_total_count\":\"20000\",\"item_description\":\"333\",\"item_url\":\"http:\\/\\/detail.tmall.com\\/item.htm?id=567404431761\",\"nick\":\"jhmmsz\\u670d\\u9970\\u65d7\\u8230\\u5e97\",\"num_iid\":\"567404431761\",\"pict_url\":\"http:\\/\\/img.alicdn.com\\/tfscom\\/i2\\/1640809615\\/TB2fq7njH5YBuNjSspoXXbeNFXa_!!1640809615-0-item_pic.jpg\",\"seller_id\":\"1640809615\",\"shop_title\":\"jhmmsz\\u670d\\u9970\\u65d7\\u8230\\u5e97\",\"small_images\":{\"string\":[\"http:\\/\\/img.alicdn.com\\/tfscom\\/i2\\/1640809615\\/TB2kVZljH5YBuNjSspoXXbeNFXa_!!1640809615.jpg\",\"http:\\/\\/img.alicdn.com\\/tfscom\\/i4\\/1640809615\\/TB21HDCjMaTBuNjSszfXXXgfpXa_!!1640809615.jpg\",\"http:\\/\\/img.alicdn.com\\/tfscom\\/i4\\/1640809615\\/TB2WK6RjSCWBuNjy0FhXXb6EVXa_!!1640809615.jpg\",\"http:\\/\\/img.alicdn.com\\/tfscom\\/i2\\/1640809615\\/TB25k.pjH1YBuNjSszhXXcUsFXa_!!1640809615.jpg\"]},\"title\":\"\\u77ed\\u8896\\u59732018\\u590f\\u5b63\\u65b0\\u6b3e\\u5973\\u88c5\\u97e9\\u7248\\u65f6\\u5c1a\\u5706\\u9886\\u857e\\u4e1d\\u767d\\u8272\\u8d85\\u4ed9\\u97e9\\u7cfbchic\\u4e0a\\u8863\\u590f\",\"user_type\":\"1\",\"volume\":\"5241\",\"zk_final_price\":\"99.00\"},{\"category\":\"16\",\"commission_rate\":\"20.00\",\"coupon_click_url\":\"https:\\/\\/uland.taobao.com\\/coupon\\/edetail?e=sx9qy6yaGsMGQASttHIRqf93Q5v5rXfK44mtxJkstAyJBiHzvBsckXmXZao6VlF39IiGEeibXrV2ZQCppHoDKPpTuo%2FGWB2lDfqEFBOhTcyf8xUDqvu9RV5fEHKecADEinzyMiY7xOPto%2Ft4Ds4Ylf5UMDZ5eDKJo6DFoM4aJ1lUuqaOehQG5LEsC315c4LYhSW4NK0XiGaH6s3NfzeYtQ%3D%3D&traceId=0bfa98ea15275221283675583e\",\"coupon_end_time\":\"2018-05-28\",\"coupon_info\":\"\\u6ee159\\u5143\\u51cf20\\u5143\",\"coupon_remain_count\":\"13140\",\"coupon_start_time\":\"2018-05-26\",\"coupon_total_count\":\"20000\",\"item_description\":\"2018\\u65b0\\u6b3e\\u590f\\u5b63\\u7f51\\u7eb1\\u62fc\\u63a5\\u9489\\u73e0\\u8fde\\u8863\\u88d9\",\"item_url\":\"http:\\/\\/detail.tmall.com\\/item.htm?id=566965407878\",\"nick\":\"\\u975e\\u58a8\\u65d7\\u8230\\u5e97\",\"num_iid\":\"566965407878\",\"pict_url\":\"http:\\/\\/img.alicdn.com\\/tfscom\\/i3\\/2113048693\\/TB2_JsihC8YBeNkSnb4XXaevFXa_!!2113048693-0-item_pic.jpg\",\"seller_id\":\"2113048693\",\"shop_title\":\"\\u975e\\u58a8\\u65d7\\u8230\\u5e97\",\"small_images\":{\"string\":[\"http:\\/\\/img.alicdn.com\\/tfscom\\/i3\\/2113048693\\/TB2M10erStYBeNjSspkXXbU8VXa_!!2113048693.jpg\",\"http:\\/\\/img.alicdn.com\\/tfscom\\/i4\\/2113048693\\/TB22qdFoACWBuNjy0FaXXXUlXXa_!!2113048693.jpg\",\"http:\\/\\/img.alicdn.com\\/tfscom\\/i1\\/2113048693\\/TB2ydRdeAUmBKNjSZFOXXab2XXa_!!2113048693.jpg\",\"http:\\/\\/img.alicdn.com\\/tfscom\\/i1\\/2113048693\\/TB2UKjCixWYBuNjy1zkXXXGGpXa_!!2113048693.png\"]},\"title\":\"\\u975e\\u58a8\\u5927\\u7801\\u5973\\u88c5\\u80d6mm2018\\u65b0\\u6b3e\\u590f\\u80d6\\u59b9\\u59b9200\\u65a4\\u906e\\u809a\\u841d\\u8389\\u85cf\\u8089\\u4ed9\\u5973\\u8fde\\u8863\\u88d9\",\"user_type\":\"1\",\"volume\":\"2852\",\"zk_final_price\":\"59.00\"}]";
                List<HObject> m = new List<HObject>();
                m = jsonreadsampleT(str);
               System.Windows.MessageBox.Show(m[0].nick);
                //数据计数，大于10条取10条数据，小于10条，取小于全部数据
              
                System.Windows.MessageBox.Show("服务器获取数据条数：" + m.Count);


            }
        }
        private List<HObject> jsonreadsampleT(string JsonStr)
        {

            //将json转换为JObject  
            List<HObject> m = new List<HObject>();
            m = JsonConvert.DeserializeObject<List<HObject>>(JsonStr);
            return m;

        }
        /// <summary>
        /// ////////////////////////////////////////
        /// </summary>
        //数据库数据对象
        class JObject
        {
           
            public string spid;//商品ID
            public string sptitle;//商品名称
            public string spimgurl01;//主图链接
            public string splm;//商品一级类目
            public string price;//网上售价
            public string spxl;//商品月销量
            public string yjbl;//收入比率(%)
            public string yjje;//佣金金额
            public string ptlx;//平台类型
            public string yhqme;//优惠券面额
            public string yhqkstime;//优惠券开始时间
            public string yhqjstime;//优惠券结束时间
            public string qhjg;//券后价格
            public string yhqtgurl;//优惠券推广链接

        }


        class DObject
        {
            public string uid;//商品当前编号
            public string spid;//商品ID
            public string splm;//商品类目
            public string imgurl01;//主图链接
            public string sptitle;//商品标题
            public string dplx;//店铺类型
            public string xianprice;//现价
            public string price;//券后价
            public string purchase;//购买人数
            public string quanprice;//优惠券价格
            public string yjje;//佣金金额
            public string yjbl;//佣金比率
            public string yhqtgurl;//优惠券推广链接
            public string outtime;//截止时间
            public string time;//创建时间

        }
        //tab页面独家优惠后台数据操作界面逻辑事件开始
        //************************
        //************************
        //************************
        //************************
        //************************
        //************************
        //下载独家优惠后台的数据
        public List<Object> lo = new List<Object>();
        public ArrayList arrayBr = new ArrayList();
        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if (arrayBr.Count>0) {
                System.Windows.MessageBox.Show("请批量上传后再下载数据！");
            }
            else {
              
            string str = WebServiceApp("mode=getsplist");
                System.Windows.MessageBox.Show(str);
                List<JObject> m = new List<JObject>();
            m = jsonreadsample(str);
             //    System.Windows.MessageBox.Show(m[0].spid);
                //数据计数，大于10条取10条数据，小于10条，取小于全部数据
                int tm = 0;
                int tbFlag = int.Parse(xqtsTB.Text);
                if (m.Count > tbFlag)
                {
                    tm = tbFlag;
                }
                else
                {
                    tm = m.Count;

                }
                System.Windows.MessageBox.Show("服务器获取数据条数：" + m.Count);

                if (tm > 0)
                {
                    for (int i = 0; i < tm; i++)
                    {
                        DispatcherHelper.DoEvents();
                        lo.Add(zzGroup(m[i], i));//数据暂存列表
                        jishu.Content = "下载数据" + i + "条";
                       
                    }
                }
                else
                {
                    System.Windows.MessageBox.Show("获取数据失败：" + m.Count);
                }
                
            }
        }
        

      
        //首页组装方法
        private DObject zzGroup(JObject obj,int i)
        {
            
             Image img = new Image();
            img.HorizontalAlignment=HorizontalAlignment.Left;
            img.VerticalAlignment = VerticalAlignment.Top;
            img.Height = 184;
            img.Width = 184;
            img.DataContext = obj.yhqtgurl;
            img.Cursor = Cursors.Hand;
            img.MouseDown += new MouseButtonEventHandler(img_click);
            img.Source =new BitmapImage(new Uri(obj.spimgurl01));

            Label spmcLb = new Label();
            spmcLb.HorizontalAlignment = HorizontalAlignment.Left;
            spmcLb.VerticalAlignment = VerticalAlignment.Top;
            spmcLb.Width = 62;
            spmcLb.Content = "商品名称:";
            spmcLb.Margin = new Thickness(268, 0, 0, 0);

            TextBox spmcTb = new TextBox();
            spmcTb.HorizontalAlignment = HorizontalAlignment.Left;
            spmcTb.VerticalAlignment = VerticalAlignment.Top;
            spmcTb.Width = 420;
            spmcTb.Text = obj.sptitle;
            spmcTb.Margin = new Thickness(330, 2, 0, 0);

            Label dplxLb = new Label();
            dplxLb.HorizontalAlignment = HorizontalAlignment.Left;
            dplxLb.VerticalAlignment = VerticalAlignment.Top;
            dplxLb.Width = 62;
            dplxLb.Content = "店铺类型:";
            dplxLb.Margin = new Thickness(268, 31, 0, 0);

            Label dplxTT = new Label();
            dplxTT.HorizontalAlignment = HorizontalAlignment.Left;
            dplxTT.VerticalAlignment = VerticalAlignment.Top;
            dplxTT.Width = 37;
            dplxTT.Content = obj.ptlx;
            dplxTT.Margin = new Thickness(330, 31, 0, 0);

            Label splmLb = new Label();
            splmLb.HorizontalAlignment = HorizontalAlignment.Left;
            splmLb.VerticalAlignment = VerticalAlignment.Top;
            splmLb.Width = 62;
            splmLb.Content = "商品类目:";
            splmLb.Margin = new Thickness(403, 31, 0, 0);

            Label splmTT = new Label();
            splmTT.HorizontalAlignment = HorizontalAlignment.Left;
            splmTT.VerticalAlignment = VerticalAlignment.Top;
            splmTT.Width = 249;
            splmTT.Content = obj.splm;
            splmTT.Margin = new Thickness(465, 31, 0, 0);

            Label wssjLb = new Label();
            wssjLb.HorizontalAlignment = HorizontalAlignment.Left;
            wssjLb.VerticalAlignment = VerticalAlignment.Top;
            wssjLb.Width = 62;
            wssjLb.Content = "网上售价:";
            wssjLb.Margin = new Thickness(267, 62, 0, 0);

            Label wssjTT = new Label();
            wssjTT.HorizontalAlignment = HorizontalAlignment.Left;
            wssjTT.VerticalAlignment = VerticalAlignment.Top;
            wssjTT.Width = 62;
            wssjTT.FontWeight = FontWeights.Bold;
            wssjTT.Content = obj.price+"元";
            wssjTT.Margin = new Thickness(329, 62, 0, 0);

            Label yxslLb = new Label();
            yxslLb.HorizontalAlignment = HorizontalAlignment.Left;
            yxslLb.VerticalAlignment = VerticalAlignment.Top;
            yxslLb.Width = 62;
            yxslLb.Content = "月销售量:";
            yxslLb.Margin = new Thickness(403, 62, 0, 0);

            Label yxslTT = new Label();
            yxslTT.HorizontalAlignment = HorizontalAlignment.Left;
            yxslTT.VerticalAlignment = VerticalAlignment.Top;
            yxslTT.Width = 120;
            yxslTT.Content = obj.spxl + "人购买";
            yxslTT.Margin = new Thickness(470, 62, 0, 0);

            Label qhjgLb = new Label();
            qhjgLb.HorizontalAlignment = HorizontalAlignment.Left;
            qhjgLb.VerticalAlignment = VerticalAlignment.Top;
            qhjgLb.Width = 62;
            qhjgLb.Content = "券后价格:";
            qhjgLb.Margin = new Thickness(267, 93, 0, 0);

            Label qhjgTT = new Label();
            qhjgTT.HorizontalAlignment = HorizontalAlignment.Left;
            qhjgTT.VerticalAlignment = VerticalAlignment.Top;
            qhjgTT.Width = 62;
            qhjgTT.FontWeight= FontWeights.Bold;
            string str = obj.yhqme;
            string[] sArray = str.Split(new string[]{ "减", "元" }, StringSplitOptions.RemoveEmptyEntries);
            string str0 = sArray[1];
            string str1 = obj.price;
            if (sArray[1] == "无条件券")
            {
                sArray = str.Split(new string[] { "元" }, StringSplitOptions.RemoveEmptyEntries);
                str0 = sArray[0];
            }
         
            Double str2 = Math.Round( Convert.ToDouble(str1) - Convert.ToDouble(str0),2);
            qhjgTT.Content = str2+ "元";
            qhjgTT.Margin = new Thickness(329, 93, 0, 0);

            Label yhqzLb = new Label();
            yhqzLb.HorizontalAlignment = HorizontalAlignment.Left;
            yhqzLb.VerticalAlignment = VerticalAlignment.Top;
            yhqzLb.Width = 62;
            qhjgTT.FontWeight = FontWeights.Bold;
            yhqzLb.Content = "优惠券值:";
            yhqzLb.Margin = new Thickness(403, 93, 0, 0);

            Label yhqzTT = new Label();
            yhqzTT.HorizontalAlignment = HorizontalAlignment.Left;
            yhqzTT.VerticalAlignment = VerticalAlignment.Top;
            yhqzTT.Width = 160;
            yhqzTT.Content = str0+"元";
            yhqzTT.Margin = new Thickness(470, 93, 0, 0);

            Label kssjLb = new Label();
            kssjLb.HorizontalAlignment = HorizontalAlignment.Left;
            kssjLb.VerticalAlignment = VerticalAlignment.Top;
            kssjLb.Width = 62;
            kssjLb.Content = "开始时间:";
            kssjLb.Margin = new Thickness(267, 124, 0, 0);

            Label kssjTT = new Label();
            kssjTT.HorizontalAlignment = HorizontalAlignment.Left;
            kssjTT.VerticalAlignment = VerticalAlignment.Top;
            kssjTT.Width = 80;
            kssjTT.Content = obj.yhqkstime;
            kssjTT.Margin = new Thickness(329, 124, 0, 0);

            Label jssjLb = new Label();
            jssjLb.HorizontalAlignment = HorizontalAlignment.Left;
            jssjLb.VerticalAlignment = VerticalAlignment.Top;
            jssjLb.Width = 62;
            jssjLb.Content = "结束时间:";
            jssjLb.Margin = new Thickness(408, 124, 0, 0);

            Label jssjTT = new Label();
            jssjTT.HorizontalAlignment = HorizontalAlignment.Left;
            jssjTT.VerticalAlignment = VerticalAlignment.Top;
            jssjTT.Width = 80;
            jssjTT.Content = obj.yhqjstime;
            jssjTT.Margin = new Thickness(471, 124, 0, 0);

            Label yjblLb = new Label();
            yjblLb.HorizontalAlignment = HorizontalAlignment.Left;
            yjblLb.VerticalAlignment = VerticalAlignment.Top;
            yjblLb.Width = 62;
            yjblLb.Content = "佣金比率:";
            yjblLb.Margin = new Thickness(626, 93, 0, 0);

            Label yjblTT = new Label();
            yjblTT.HorizontalAlignment = HorizontalAlignment.Left;
            yjblTT.VerticalAlignment = VerticalAlignment.Top;
            yjblTT.Width = 62;
            yjblTT.Content = obj.yjbl+"%";
            yjblTT.Margin = new Thickness(688, 93, 0, 0);

            Label yjjeLb = new Label();
            yjjeLb.HorizontalAlignment = HorizontalAlignment.Left;
            yjjeLb.VerticalAlignment = VerticalAlignment.Top;
            yjjeLb.Width = 62;
            yjjeLb.Content = "佣金金额:";
            yjjeLb.Margin = new Thickness(626, 62, 0, 0);

            Label yjjeTT = new Label();
            yjjeTT.HorizontalAlignment = HorizontalAlignment.Left;
            yjjeTT.VerticalAlignment = VerticalAlignment.Top;
            yjjeTT.Width = 62;
            yjjeTT.Content = obj.yjje + "元";
            yjjeTT.Margin = new Thickness(688, 62, 0, 0);

          /*  RadioButton djyhRB = new RadioButton();
            djyhRB.HorizontalAlignment = HorizontalAlignment.Left;
            djyhRB.VerticalAlignment = VerticalAlignment.Top;
            djyhRB.Content = "加入独家优惠";
            djyhRB.Margin = new Thickness(823, 20, 0, 0);
            djyhRB.IsChecked = true;

            RadioButton gftjRB = new RadioButton();
            gftjRB.HorizontalAlignment = HorizontalAlignment.Left;
            gftjRB.VerticalAlignment = VerticalAlignment.Top;
            gftjRB.Content = "加入官方推荐";
            gftjRB.Margin = new Thickness(823, 44, 0, 0);

            RadioButton noneRB = new RadioButton();
            noneRB.HorizontalAlignment = HorizontalAlignment.Left;
            noneRB.VerticalAlignment = VerticalAlignment.Top;
            noneRB.Content = "不加入任何";
            noneRB.Margin = new Thickness(823, 65, 0, 0);
            */
            Grid _grid = new Grid();
            _grid.Height = 184;
            _grid.Width = 960;
            _grid.HorizontalAlignment = HorizontalAlignment.Left;
            _grid.VerticalAlignment = VerticalAlignment.Top;

            Border _border = new Border();
            _border.BorderBrush = new SolidColorBrush(Colors.Black);
            _border.BorderThickness = new Thickness(1);
            _border.Margin = new Thickness(0, 5, 0, 5);
            _border.Height = 184;
            _border.Width = 960;
            _border.HorizontalAlignment = HorizontalAlignment.Left;
            _border.VerticalAlignment = VerticalAlignment.Top;
         
            

            Button btDelete = new Button();
            btDelete.HorizontalAlignment = HorizontalAlignment.Left;
            btDelete.VerticalAlignment = VerticalAlignment.Top;
            btDelete.Content = "删除数据";
            btDelete.Click += new RoutedEventHandler(btDelete_Click);
            btDelete.Margin = new Thickness(836, 108, 0, 0);
            btDelete.DataContext = i.ToString();

          /*  Button btInsert = new Button();
            btInsert.HorizontalAlignment = HorizontalAlignment.Left;
            btInsert.VerticalAlignment = VerticalAlignment.Top;
            btInsert.Content = "加入数据";
            btInsert.Click += new RoutedEventHandler(btInsert_Click);
            btInsert.Margin = new Thickness(836, 132, 0, 0);
            */
            _border.Child = _grid;
            _grid.Children.Add(img);
            _grid.Children.Add(spmcLb);
            _grid.Children.Add(spmcTb);
            _grid.Children.Add(dplxLb);
            _grid.Children.Add(dplxTT);
            _grid.Children.Add(splmLb);
            _grid.Children.Add(splmTT);
            _grid.Children.Add(wssjLb);
            _grid.Children.Add(wssjTT);
            _grid.Children.Add(yxslLb);
            _grid.Children.Add(yxslTT);
            _grid.Children.Add(qhjgLb);
            _grid.Children.Add(qhjgTT);
            _grid.Children.Add(yhqzLb);
            _grid.Children.Add(yhqzTT);
            _grid.Children.Add(kssjLb);
            _grid.Children.Add(kssjTT);
            _grid.Children.Add(jssjLb);
            _grid.Children.Add(jssjTT);
            _grid.Children.Add(yjblLb);
            _grid.Children.Add(yjblTT);
            _grid.Children.Add(yjjeLb);
            _grid.Children.Add(yjjeTT);
          //  _grid.Children.Add(djyhRB);
          //  _grid.Children.Add(gftjRB);
          //  _grid.Children.Add(noneRB);
            _grid.Children.Add(btDelete);
         //   _grid.Children.Add(btInsert);
            lbBox.Items.Add(_border);
            arrayBr.Add(_border);
             

             DObject dObj = new DObject();
            dObj.uid = i.ToString();
            dObj.spid = obj.spid;
            dObj.splm = obj.splm;
            dObj.imgurl01 = obj.spimgurl01;
            dObj.sptitle = spmcTb.Text;
            dObj.dplx = obj.ptlx;
            dObj.price = str2.ToString();
            dObj.quanprice = str0 ;
            dObj.purchase = obj.spxl;
            dObj.yjje = obj.yjje;
            dObj.yjbl = obj.yjbl;
            dObj.outtime = jssjTT.Content as string;
            dObj.yhqtgurl = obj.yhqtgurl;
            dObj.xianprice = obj.price;
            _border.DataContext = dObj;
            return dObj;
          
    }
           //剔除一个数据
        private void btDelete_Click(object sender, RoutedEventArgs e)
        {
            Button bt = sender as Button;
            int num = int.Parse(bt.DataContext.ToString());
            // System.Windows.MessageBox.Show("lng:" +lo.LongCount());
            Border br = arrayBr[num] as Border;
            lbBox.Items.Remove(br);
            DObject dObj = br.DataContext as DObject;
            lo.Remove(dObj);
            string result = WebServiceApp("mode=updatahtsjy&flag=-1&spid="+ dObj.spid.ToString());
            System.Windows.MessageBox.Show("更新数据结果:" + result);

        }


        private void img_click(object sender, MouseEventArgs e)
        {
            Image img = sender as Image;
            string url = img.DataContext as string;
            if (url != "") { 
            System.Diagnostics.Process.Start(url);
            }
            else
            {
                System.Windows.MessageBox.Show("URL为空！");
            }
        }
        //批量上传事件djyh后台数据库
        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            // $spid,$imgurl01,$sptitle,$dplx,$price,$purchase,$quanPrice,$outtime
            int count = lo.Count();
            int sum = 0;
            for (int i = 0; i < count; i++) { 
            DObject Dobj = lo[i] as DObject;
            string modeStr = "mode=setdjyhdataht&spid=" + Dobj.spid + "&splm=" + Dobj.splm + "&imgurl01=" + Dobj.imgurl01 + "&sptitle=" + Dobj.sptitle + "&dplx=" + Dobj.dplx + "&price=" + Dobj.price + "&purchase=" + Dobj.purchase + "&quanPrice=" + Dobj.quanprice + "&outtime=" + Dobj.outtime + "&yjje=" + Dobj.yjje + "&yjbl=" + Dobj.yjbl + "&yhqtgurl=" + Dobj.yhqtgurl + "&xianprice=" + Dobj.xianprice;
            string str = WebServiceApp(modeStr);
               string[] tt = str.Split(new Char[] { '"' });
                if (tt[1].ToString() == "1")
                {
                    string result = WebServiceApp("mode=updatahtsjy&flag=1&spid=" + Dobj.spid.ToString());
                    string[] res= result.Split(new Char[] { '"' });
                    if (res[1].ToString()== "1")
                    {
                        sum ++;
                        
                         Border br = arrayBr[int.Parse(Dobj.uid)] as Border;
                        lbBox.Items.Remove(br);
                    }
                    else
                    {
                        System.Windows.MessageBox.Show("更新数据未成功！错误码：" + res[1]);
                    }
                }
                else
                {
                    System.Windows.MessageBox.Show("插入数据未成功！错误码："+ tt.ToString());
                }
            }

            arrayBr.Clear();
            lo.Clear();
            System.Windows.MessageBox.Show("总共"+ count+"条数据,成功插入"+sum+"条数据！"+arrayBr.Count);

          
          

        }
        //tab页面-独家优惠-后台数据操作界面逻辑事件开始
        //************************
        //************************
        //************************
        //************************
        //************************
        //************************
        //下载数据
        public List<Object> djyhlo = new List<Object>();//暂存对象列表
        public ArrayList djyharrayBr = new ArrayList();//当前列表数组
        private void djyhButton_Click(object sender, RoutedEventArgs e)
        {
            if (djyharrayBr.Count > 0)
            {
                System.Windows.MessageBox.Show("请批量上传后再下载数据！");
            }
            else
            {

                string str = WebServiceApp("mode=gethtdjyhdata");//服务器接口方法

                List<DObject> m = new List<DObject>();//暂存服务器获取的数据对象列表
                m = JsonConvert.DeserializeObject<List<DObject>>(str);

                //数据计数，大于10条取10条数据，小于10条，取小于全部数据
                int tm = 0;
                int tbFlag = int.Parse(xqtsDJTB.Text);
                if (m.Count > tbFlag)
                {
                    tm = tbFlag;
                }
                else
                {
                    tm = m.Count;

                }
             //   System.Windows.MessageBox.Show("服务器获取数据条数：" + m.Count);

                if (tm > 0) { 
                    for (int i = 0; i < tm; i++)
                    {
                        djyhlo.Add(djyhzzGroup(m[i], i));//数据暂存列表
                        djyhjishu.Content = "下载数据" + i + "条";
                        DispatcherHelper.DoEvents();
                    }
                }
                else
                {
                    System.Windows.MessageBox.Show("获取数据失败："+m.Count);
                }
            }
        }

        //TAB页面《独家优惠》列表组装方法
        private DObject djyhzzGroup(DObject obj, int i) 
        {

            Image img = new Image();
            img.HorizontalAlignment = HorizontalAlignment.Left;
            img.VerticalAlignment = VerticalAlignment.Top;
            img.Height = 184;
            img.Width = 184;
            img.DataContext = obj.yhqtgurl;
            img.Cursor = Cursors.Hand;
            img.MouseDown += new MouseButtonEventHandler(img_click);
            img.Source = new BitmapImage(new Uri(obj.imgurl01));

            Label spmcLb = new Label();
            spmcLb.HorizontalAlignment = HorizontalAlignment.Left;
            spmcLb.VerticalAlignment = VerticalAlignment.Top;
            spmcLb.Width = 62;
            spmcLb.Content = "商品名称:";
            spmcLb.Margin = new Thickness(268, 0, 0, 0);

            TextBox spmcTb = new TextBox();
            spmcTb.HorizontalAlignment = HorizontalAlignment.Left;
            spmcTb.VerticalAlignment = VerticalAlignment.Top;
            spmcTb.Width = 420;
            spmcTb.Text = obj.sptitle;
            spmcTb.Margin = new Thickness(330, 2, 0, 0);

            Label dplxLb = new Label();
            dplxLb.HorizontalAlignment = HorizontalAlignment.Left;
            dplxLb.VerticalAlignment = VerticalAlignment.Top;
            dplxLb.Width = 62;
            dplxLb.Content = "店铺类型:";
            dplxLb.Margin = new Thickness(268, 31, 0, 0);

            Label dplxTT = new Label();
            dplxTT.HorizontalAlignment = HorizontalAlignment.Left;
            dplxTT.VerticalAlignment = VerticalAlignment.Top;
            dplxTT.Width = 37;
            dplxTT.Content = obj.dplx;
            dplxTT.Margin = new Thickness(330, 31, 0, 0);

            Label splmLb = new Label();
            splmLb.HorizontalAlignment = HorizontalAlignment.Left;
            splmLb.VerticalAlignment = VerticalAlignment.Top;
            splmLb.Width = 62;
            splmLb.Content = "商品类目:";
            splmLb.Margin = new Thickness(403, 31, 0, 0);

            Label splmTT = new Label();
            splmTT.HorizontalAlignment = HorizontalAlignment.Left;
            splmTT.VerticalAlignment = VerticalAlignment.Top;
            splmTT.Width = 249;
            splmTT.Content = obj.splm;
            splmTT.Margin = new Thickness(465, 31, 0, 0);

            Label wssjLb = new Label();
            wssjLb.HorizontalAlignment = HorizontalAlignment.Left;
            wssjLb.VerticalAlignment = VerticalAlignment.Top;
            wssjLb.Width = 62;
            wssjLb.Content = "网上售价:";
            wssjLb.Margin = new Thickness(267, 62, 0, 0);

            Label wssjTT = new Label();
            wssjTT.HorizontalAlignment = HorizontalAlignment.Left;
            wssjTT.VerticalAlignment = VerticalAlignment.Top;
            wssjTT.Width = 62;
            wssjTT.FontWeight = FontWeights.Bold;
            wssjTT.Content = obj.xianprice + "元";
            wssjTT.Margin = new Thickness(329, 62, 0, 0);

            Label yxslLb = new Label();
            yxslLb.HorizontalAlignment = HorizontalAlignment.Left;
            yxslLb.VerticalAlignment = VerticalAlignment.Top;
            yxslLb.Width = 62;
            yxslLb.Content = "月销售量:";
            yxslLb.Margin = new Thickness(403, 62, 0, 0);

            Label yxslTT = new Label();
            yxslTT.HorizontalAlignment = HorizontalAlignment.Left;
            yxslTT.VerticalAlignment = VerticalAlignment.Top;
            yxslTT.Width = 120;
            yxslTT.Content = obj.purchase + "人购买";
            yxslTT.Margin = new Thickness(470, 62, 0, 0);

            Label qhjgLb = new Label();
            qhjgLb.HorizontalAlignment = HorizontalAlignment.Left;
            qhjgLb.VerticalAlignment = VerticalAlignment.Top;
            qhjgLb.Width = 62;
            qhjgLb.Content = "券后价格:";
            qhjgLb.Margin = new Thickness(267, 93, 0, 0);

            Label qhjgTT = new Label();
            qhjgTT.HorizontalAlignment = HorizontalAlignment.Left;
            qhjgTT.VerticalAlignment = VerticalAlignment.Top;
            qhjgTT.Width = 62;
            qhjgTT.FontWeight = FontWeights.Bold;
          
            qhjgTT.Content =obj.price + "元";
            qhjgTT.Margin = new Thickness(329, 93, 0, 0);

            Label yhqzLb = new Label();
            yhqzLb.HorizontalAlignment = HorizontalAlignment.Left;
            yhqzLb.VerticalAlignment = VerticalAlignment.Top;
            yhqzLb.Width = 62;
            qhjgTT.FontWeight = FontWeights.Bold;
            yhqzLb.Content = "优惠券值:";
            yhqzLb.Margin = new Thickness(403, 93, 0, 0);

            Label yhqzTT = new Label();
            yhqzTT.HorizontalAlignment = HorizontalAlignment.Left;
            yhqzTT.VerticalAlignment = VerticalAlignment.Top;
            yhqzTT.Width = 160;
            yhqzTT.Content = obj.quanprice + "元";
            yhqzTT.Margin = new Thickness(470, 93, 0, 0);

            Label kssjLb = new Label();
            kssjLb.HorizontalAlignment = HorizontalAlignment.Left;
            kssjLb.VerticalAlignment = VerticalAlignment.Top;
            kssjLb.Width = 62;
            kssjLb.Content = "截止时间:";
            kssjLb.Margin = new Thickness(267, 124, 0, 0);

            Label kssjTT = new Label();
            kssjTT.HorizontalAlignment = HorizontalAlignment.Left;
            kssjTT.VerticalAlignment = VerticalAlignment.Top;
            kssjTT.Width = 80;
            kssjTT.Content = obj.outtime;
            kssjTT.Margin = new Thickness(329, 124, 0, 0);

            Label jssjLb = new Label();
            jssjLb.HorizontalAlignment = HorizontalAlignment.Left;
            jssjLb.VerticalAlignment = VerticalAlignment.Top;
            jssjLb.Width = 62;
            jssjLb.Content = "创建时间:";
            jssjLb.Margin = new Thickness(408, 124, 0, 0);

            Label jssjTT = new Label();
            jssjTT.HorizontalAlignment = HorizontalAlignment.Left;
            jssjTT.VerticalAlignment = VerticalAlignment.Top;
            jssjTT.Width = 80;
            jssjTT.Content = obj.time;
            jssjTT.Margin = new Thickness(471, 124, 0, 0);

            Label yjblLb = new Label();
            yjblLb.HorizontalAlignment = HorizontalAlignment.Left;
            yjblLb.VerticalAlignment = VerticalAlignment.Top;
            yjblLb.Width = 62;
            yjblLb.Content = "佣金比率:";
            yjblLb.Margin = new Thickness(626, 93, 0, 0);

            Label yjblTT = new Label();
            yjblTT.HorizontalAlignment = HorizontalAlignment.Left;
            yjblTT.VerticalAlignment = VerticalAlignment.Top;
            yjblTT.Width = 62;
            yjblTT.Content = obj.yjbl +"%";
            yjblTT.Margin = new Thickness(688, 93, 0, 0);

            Label yjjeLb = new Label();
            yjjeLb.HorizontalAlignment = HorizontalAlignment.Left;
            yjjeLb.VerticalAlignment = VerticalAlignment.Top;
            yjjeLb.Width = 62;
            yjjeLb.Content = "佣金金额:";
            yjjeLb.Margin = new Thickness(626, 62, 0, 0);

            Label yjjeTT = new Label();
            yjjeTT.HorizontalAlignment = HorizontalAlignment.Left;
            yjjeTT.VerticalAlignment = VerticalAlignment.Top;
            yjjeTT.Width = 62;
            yjjeTT.Content = obj.yjje + "元";
            yjjeTT.Margin = new Thickness(688, 62, 0, 0);
 
            Grid _grid = new Grid();
            _grid.Height = 184;
            _grid.Width = 960;
            _grid.HorizontalAlignment = HorizontalAlignment.Left;
            _grid.VerticalAlignment = VerticalAlignment.Top;

            Border _border = new Border();
            _border.BorderBrush = new SolidColorBrush(Colors.Black);
            _border.BorderThickness = new Thickness(1);
            _border.Margin = new Thickness(0, 5, 0, 5);
            _border.Height = 184;
            _border.Width = 960;
            _border.HorizontalAlignment = HorizontalAlignment.Left;
            _border.VerticalAlignment = VerticalAlignment.Top;



            Button btDelete = new Button();
            btDelete.HorizontalAlignment = HorizontalAlignment.Left;
            btDelete.VerticalAlignment = VerticalAlignment.Top;
            btDelete.Content = "删除数据";
            btDelete.Click += new RoutedEventHandler(djyhbtDelete_Click);
            btDelete.Margin = new Thickness(836, 108, 0, 0);
            btDelete.DataContext = i.ToString();

            Button btInsert = new Button();
            btInsert.HorizontalAlignment = HorizontalAlignment.Left;
            btInsert.VerticalAlignment = VerticalAlignment.Top;
            btInsert.Content = "加入必抢";
            btInsert.Click += new RoutedEventHandler(btInsert_Click);
            btInsert.Margin = new Thickness(836, 132, 0, 0);
            btInsert.DataContext = i.ToString();

            _border.Child = _grid;
            _grid.Children.Add(img);
            _grid.Children.Add(spmcLb);
            _grid.Children.Add(spmcTb);
            _grid.Children.Add(dplxLb);
            _grid.Children.Add(dplxTT);
            _grid.Children.Add(splmLb);
            _grid.Children.Add(splmTT);
            _grid.Children.Add(wssjLb);
            _grid.Children.Add(wssjTT);
            _grid.Children.Add(yxslLb);
            _grid.Children.Add(yxslTT);
            _grid.Children.Add(qhjgLb);
            _grid.Children.Add(qhjgTT);
            _grid.Children.Add(yhqzLb);
            _grid.Children.Add(yhqzTT);
            _grid.Children.Add(kssjLb);
            _grid.Children.Add(kssjTT);
            _grid.Children.Add(jssjLb);
            _grid.Children.Add(jssjTT);
            _grid.Children.Add(yjblLb);
            _grid.Children.Add(yjblTT);
            _grid.Children.Add(yjjeLb);
            _grid.Children.Add(yjjeTT);
            _grid.Children.Add(btInsert);
            _grid.Children.Add(btDelete);
   
            djyhlbBox.Items.Add(_border);//UI列表加载数据

            djyharrayBr.Add(_border);//当前列表暂存器加载数据


            DObject dObj = new DObject();//自定义数据对象
            dObj.uid = i.ToString();
            dObj.spid = obj.spid;
            dObj.splm = obj.splm;
            dObj.imgurl01 = obj.imgurl01;
            dObj.sptitle = spmcTb.Text;
            dObj.dplx = obj.dplx;
            dObj.price = qhjgTT.Content as string;
            dObj.quanprice = yhqzTT.Content as string;
            dObj.purchase = obj.purchase;
            dObj.yhqtgurl = obj.yhqtgurl;
            dObj.yjje = obj.yjje;
            dObj.yjbl = obj.yjbl;
            dObj.xianprice = obj.xianprice;
            dObj.outtime = jssjTT.Content as string;
            _border.DataContext = dObj;
            return  dObj;
        }
        //插入必抢数据库
        private void btInsert_Click(object sender, RoutedEventArgs e)
        {
            Button bt = sender as Button;
        
            int num = int.Parse(bt.DataContext.ToString());//获取按钮坐标ID
            Border br = djyharrayBr[num] as Border;
            DObject dObj = br.DataContext as DObject;
            string modeStr = "mode=setjrbqdataht&spid=" + dObj.spid + "&splm=" + dObj.splm + "&imgurl01=" + dObj.imgurl01 + "&sptitle=" + dObj.sptitle + "&dplx=" + dObj.dplx + "&price=" + dObj.price + "&purchase=" + dObj.purchase + "&quanPrice=" + dObj.quanprice + "&outtime=" + dObj.outtime + "&yjje=" + dObj.yjje + "&yjbl=" + dObj.yjbl + "&yhqtgurl=" + dObj.yhqtgurl + "&xianprice=" + dObj.xianprice;
            string str = WebServiceApp(modeStr);
            int kk =int.Parse(str.Substring(1,1));
       
            if (kk == 1)
            {
                bt.IsEnabled = false;
                System.Windows.MessageBox.Show("加入必抢成功！" + kk);
            }
            else
            {
                System.Windows.MessageBox.Show("加入必抢失败，错误码：" + kk);
            }
           
        }
        //剔除一个数据
        private void djyhbtDelete_Click(object sender, RoutedEventArgs e)
        {
            Button bt = sender as Button;
            int num = int.Parse(bt.DataContext.ToString());//获取按钮坐标ID
            // System.Windows.MessageBox.Show("lng:" +lo.LongCount());
            Border br = djyharrayBr[num] as Border;//-当前列表-反向获取item
            djyhlbBox.Items.Remove(br);//-当前列表-剔除item
            DObject dObj = br.DataContext as DObject;
            djyhlo.Remove(dObj);//-对象列表-中剔除该item
            string result = WebServiceApp("mode=updatahtdjyh&flag=-1&spid=" + dObj.spid.ToString());

            System.Windows.MessageBox.Show("更新数据结果:" + result);

        }
        //批量上传独家优惠到前台
        private void updjyhClick(object sender, RoutedEventArgs e)
        {
            

            int count = djyhlo.Count();//-当前对象列表-数据剩余条数
          //  System.Windows.MessageBox.Show("数据结果:" + count);
          //***************************
          //循环上传对象列表中的精选商品数据
            int sum = 0;
            for (int i = 0; i < count; i++)
            {
                DObject Dobj = djyhlo[i] as DObject;
                string modeStr = "mode=setdjyhdata&spid=" + Dobj.spid + "&splm=" + Dobj.splm + "&imgurl01=" + Dobj.imgurl01 + "&sptitle=" + Dobj.sptitle + "&dplx=" + Dobj.dplx + "&price=" + Dobj.price + "&purchase=" + Dobj.purchase + "&quanPrice=" + Dobj.quanprice + "&outtime=" + Dobj.outtime  + "&yhqtgurl=" + Dobj.yhqtgurl + "&xianprice=" + Dobj.xianprice;
                string str = WebServiceApp(modeStr);
              //  System.Windows.MessageBox.Show("服务器返回数据：" + str);
                if (str == "no item!")
                {
                    System.Windows.MessageBox.Show("插入的商品已不存在，请核实！" + str);
                    string result = WebServiceApp("mode=updatahtdjyh&flag=-1&spid=" + Dobj.spid.ToString());
                    string[] res = result.Split(new Char[] { '"' });
                    if (res[1].ToString() == "1")
                    {
                        sum++;
                        Border br = djyharrayBr[int.Parse(Dobj.uid)] as Border;
                        djyhlbBox.Items.Remove(br);
                    }
                    else
                    {
                        System.Windows.MessageBox.Show("更新数据未成功！错误码：" + res[1]);
                    }
                }
                else
                {
                    string[] tt = str.Split(new Char[] { '"' });

                    if (tt[1].ToString() == "1")
                    {
                        string result = WebServiceApp("mode=updatahtdjyh&flag=-1&spid=" + Dobj.spid.ToString());
                        string[] res = result.Split(new Char[] { '"' });
                        if (res[1].ToString() == "1")
                        {
                            sum++;
                            Border br = djyharrayBr[int.Parse(Dobj.uid)] as Border;
                            djyhlbBox.Items.Remove(br);
                        }
                        else
                        {
                            System.Windows.MessageBox.Show("更新数据未成功！错误码：" + res[1]);
                        }
                    }
                    else
                    {
                        System.Windows.MessageBox.Show("插入数据未成功！错误码：" + string.Join("|",tt));
                    }


                };

                    
            }

            djyharrayBr.Clear();
            djyhlo.Clear();
            System.Windows.MessageBox.Show("总共" + count + "条数据,成功插入" + sum + "条数据！" + arrayBr.Count);
        }
        //tab页面独家优惠后台数据操作界面逻辑事件结束
        //************************
        //************************
        //************************
        //************************
        //************************
        //************************
        //json转换为JObject
        private List<JObject> jsonreadsample(string JsonStr)
        {

            //将json转换为JObject  
            List<JObject> m = new List<JObject>();
            m = JsonConvert.DeserializeObject<List<JObject>>(JsonStr);
            return m;

        }

        ///服务器接口方法
        /// <param name="url">地址</param>
        /// <param name="method">方法</param>
        /// <param name="param">json参数</param>
        /// <returns></returns>
        private static string WebServiceApp(string param)
        {
            string url = "http://www.citytk.com/modeht/mode.php";
            //param = "mode=getsplist";
            //转换输入参数的编码类型，获取bytep[]数组 
            byte[] byteArray = Encoding.UTF8.GetBytes(param);
            //初始化新的webRequst
            //1． 创建httpWebRequest对象
            System.Net.HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create(url);
            //2． 初始化HttpWebRequest对象
            webRequest.Method = "POST";
            webRequest.ContentType = "application/x-www-form-urlencoded";
            webRequest.ContentLength = byteArray.Length;
            //3． 附加要POST给服务器的数据到HttpWebRequest对象(附加POST数据的过程比较特殊，它并没有提供一个属性给用户存取，需要写入HttpWebRequest对象提供的一个stream里面。)
            Stream newStream = webRequest.GetRequestStream();//创建一个Stream,赋值是写入HttpWebRequest对象提供的一个stream里面
            newStream.Write(byteArray, 0, byteArray.Length);
            newStream.Close();
            //4． 读取服务器的返回信息
            HttpWebResponse response = (HttpWebResponse)webRequest.GetResponse();
            StreamReader php = new StreamReader(response.GetResponseStream(), Encoding.UTF8);
            string phpend = php.ReadToEnd();
            return phpend;

        }
        ///异步执行
        public static class DispatcherHelper
        {
            [SecurityPermissionAttribute(SecurityAction.Demand, Flags = SecurityPermissionFlag.UnmanagedCode)]
            public static void DoEvents()
            {
                DispatcherFrame frame = new DispatcherFrame();
                Dispatcher.CurrentDispatcher.BeginInvoke(DispatcherPriority.Background, new DispatcherOperationCallback(ExitFrames), frame);
                try { Dispatcher.PushFrame(frame); }
                catch (InvalidOperationException) { }
            }
            private static object ExitFrames(object frame)
            {
                ((DispatcherFrame)frame).Continue = false;
                return null;
            }
        }

    }

}
