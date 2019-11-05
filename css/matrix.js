let matr=[[1,2,3],[4,5,6],[7,8,9]];
let matr1=[[1,2,3,4,5,6],[1,2,3,4,5,6]];
//rows and column length
let r=matr.length;
let c=matr[0].length;
//number of elements
let rcount=r*c;
//row start index
let i=0;
//exhaust flag
let rflag=0;
let cflag=0;

while(rcount)
{       
        if(rflag==0)
        {   

            for(let j=0;j<c;j++)
            {   
                if(i>=j) 
                {
                    
                    rcount-=1;
                    console.log(matr[i-j][j]);
                }
                else break;
            }
            i++;
        }
        else{
            
            if(rcount)
            {   
                for(let j=rflag;((j<c)&&(i>=0));j++)
                    {   
                        rcount-=1;
                        console.log(matr[i][j]);
                        --i;
                    }
                    
            }
            
        }
        if(i>=r || rflag)
        {
        rflag+=1;
        i=r-1;
        }
        

}

