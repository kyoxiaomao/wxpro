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

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            string str = WebServiceApp("http://www.citytk.com/djyhphp/mode.php");
            List<JObject> m = new List<JObject>();
            m = jsonreadsample(str);
            // System.Windows.MessageBox.Show(m[0].spid);

            for (int i = 0; i < 100; i++)
            {
                zzGroup(m[i],i);

                jishu.Content = "下载数据" + i + "条";

            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="url">地址</param>
        /// <param name="method">方法</param>
        /// <param name="param">json参数</param>
        /// <returns></returns>
        private static string WebServiceApp(string url)
        {
            string param = "mode=gethtsjy";
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

        private List<JObject> jsonreadsample(string JsonStr)
        {
            
            //将json转换为JObject  
            List<JObject> m = new List<JObject>();
              m = JsonConvert.DeserializeObject<List<JObject>>(JsonStr);
           return m;

        }
        public List<object> lo = new List<object>();
        public Array arrayBr = [];
        //组装方法
        private void zzGroup(JObject obj,int i)
        {
            
             Image img = new Image();
            img.HorizontalAlignment=HorizontalAlignment.Left;
            img.VerticalAlignment = VerticalAlignment.Top;
            img.Height = 184;
            img.Width = 184;
            img.DataContext = obj.tkurl;
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

            RadioButton djyhRB = new RadioButton();
            djyhRB.HorizontalAlignment = HorizontalAlignment.Left;
            djyhRB.VerticalAlignment = VerticalAlignment.Top;
            djyhRB.Content = "加入独家优惠";
            djyhRB.Margin = new Thickness(823, 20, 0, 0);

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
            _border.Name = "br" + i.ToString();
            

            Button btDelete = new Button();
            btDelete.HorizontalAlignment = HorizontalAlignment.Left;
            btDelete.VerticalAlignment = VerticalAlignment.Top;
            btDelete.Content = "删除数据";
            btDelete.Click += new RoutedEventHandler(btDelete_Click);
            btDelete.Margin = new Thickness(836, 108, 0, 0);
            btDelete.DataContext = i.ToString();

            Button btInsert = new Button();
            btInsert.HorizontalAlignment = HorizontalAlignment.Left;
            btInsert.VerticalAlignment = VerticalAlignment.Top;
            btInsert.Content = "加入数据";
            btInsert.Click += new RoutedEventHandler(btInsert_Click);
            btInsert.Margin = new Thickness(836, 132, 0, 0);

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
            _grid.Children.Add(djyhRB);
            _grid.Children.Add(gftjRB);
            _grid.Children.Add(noneRB);
            _grid.Children.Add(btDelete);
            _grid.Children.Add(btInsert);
            lbBox.Items.Add(_border);
           

            DObject dObj = new DObject();
            dObj.spid = obj.spid;
            dObj.imgurl01 = obj.spimgurl01;
            dObj.sptitle = obj.sptitle;
            dObj.dplx = obj.ptlx;
            dObj.price = qhjgTT.Content as string ;
            dObj.quanprice = yhqzTT.Content as string;
            dObj.purchase = obj.spxl;
            lo.Add(dObj);
    }
        
        private void btDelete_Click(object sender, RoutedEventArgs e)
        {
            Button bt = sender as Button;
            string name = "br" + bt.DataContext;
           // Border br = this.FindName(name) as Border;
          // // System.Windows.MessageBox.Show("name:" +br.Name);
            lbBox.Items.Remove(bt);


        }

        private void btInsert_Click(object sender, RoutedEventArgs e)
        {

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
        //批量上传事件
        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            string str = WebServiceApp("http://www.citytk.com/djyhphp/mode.php");
            List<JObject> m = new List<JObject>();
              m = jsonreadsample(str);
           // System.Windows.MessageBox.Show(m[0].spid);

           for(int i = 0; i < 100; i++)
            {
                zzGroup(m[i],i);
        
                jishu.Content = "下载数据" + i+"条";
                
            }
          

        }

    
    }
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
        public string tkurl;//淘宝客链接

    }
 

    class DObject
    {
        public string spid;//商品ID
        public string splm;//商品类目
        public string imgurl01;//主图链接
        public string sptitle;//商品标题
        public string dplx;//店铺类型
        public string price;//券后价
        public string purchase;//购买人数
        public string quanprice;//优惠券价格
        public string outtime;//截止时间
     
    }
}
