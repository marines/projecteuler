#!/bin/ruby

count = 8

(0..1).each {|g| # 100
	(0..3).each {|f| # 50
		(0..9).each {|e| # 20
			(0..19).each {|d| # 10
				(0..39).each {|c| # 5
					(0..99).each {|b| # 2
						(0..199).each {|a| # 1
							count += 1 if a+b*2+c*5+d*10+e*20+f*50+g*100 == 200
						}
					}
				}
			}
		}
	}
}

p count
